import { Request, Response } from "express";
import httpStatus from "http-status";

import Plausible from "@/libs/Plausible";

import { Controller } from "./Controller";

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

			res.status(httpStatus.OK);
			res.send();
		} catch (error) {
			console.log(error.message);

			res.status(httpStatus.OK);
			res.send();
		}
	}
}
