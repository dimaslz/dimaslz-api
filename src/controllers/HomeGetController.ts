import { Request, Response } from "express";
import httpStatus from "http-status";
import camelCase from "lodash.camelcase";

import { Controller } from "./Controller";
import data from "./data";

export default class HomeGetController implements Controller {
	async run(req: Request<{ attribute: string }, never, never, never>, res: Response) {
		res.status(httpStatus.OK);

		const { attribute } = req.params;

		if (!(camelCase(attribute) in data)) {
			res.json({
				status: 404,
				message: "Resource data not found",
			});
		} else {
			return res.json(data[camelCase(attribute)]);
		}

		res.json({ ...data });
	}
}
