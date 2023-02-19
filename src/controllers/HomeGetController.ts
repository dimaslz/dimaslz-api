import { Request, Response } from "express";
import httpStatus from "http-status";
import camelCase from "lodash.camelcase";

import { Controller } from "./Controller";

export default class HomeGetController implements Controller {
	async run(req: Request<{ attribute: string }, never, never, never>, res: Response) {
		const { default: data }: any = await import("../data");

		const { attribute } = req.params;

		if (!attribute) {
			res.status(httpStatus.OK);

			return res.json({ ...data });
		}

		if (attribute && !data[camelCase(attribute)]) {
			res.status(httpStatus.NOT_FOUND);

			return res.json({
				status: 404,
				message: "Resource data not found",
			});
		}

		const { s } = req.query;
		let response = data[camelCase(attribute)];

		if (Array.isArray(response) && s) {
			response = response.filter((item) => {
				return item.keywords.some((keyword) => keyword.includes(s));
			});
		}

		res.status(httpStatus.OK);

		return res.json({
			data: response,
		});
	}
}
