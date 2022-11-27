import { Request, Response } from "express";
import fs from "fs/promises";
import httpStatus from "http-status";
import path from "path";

import Plausible from "@/libs/Plausible";

import { Controller } from "./Controller";

const staticFolderPath = path.resolve(`${__dirname}/../../static`);

export default class HomeGetController implements Controller {
	public analytics: Plausible;

	constructor() {
		this.analytics = new Plausible();
	}

	async run(req: Request, res: Response) {
		try {
			const userAgent = req.headers["user-agent"];
			const ipAddresses = req.header("x-forwarded-for") || req.socket.remoteAddress;

			const { query } = req;

			const jsonStr = (query.props as string).replace(/(\w+:)|(\w+ :)/g, function (matchedStr) {
				return `"${matchedStr.substring(0, matchedStr.length - 1)}":`;
			});

			const propsObj = JSON.parse(jsonStr);

			const data = {
				name: query.name as string,
				url: query.url as string,
				domain: query.domain as string,
				props: propsObj as object,
			};

			this.analytics.track({
				data,
				headers: {
					"User-Agent": userAgent,
					"X-Forwarded-For": ipAddresses,
				},
			});

			const pixelImage = await fs.readFile(path.resolve(`${staticFolderPath}/pixel.png`));

			res.status(httpStatus.OK);
			res.writeHead(200, { "Content-Type": "image/png" });
			res.end(pixelImage);
		} catch (error) {
			console.log(error.message);

			res.status(httpStatus.OK);
			res.send();
		}
	}
}
