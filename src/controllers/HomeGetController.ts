import { Request, Response } from "express";
import httpStatus from "http-status";

import { Controller } from "./Controller";

export default class HomeGetController implements Controller {
	async run(req: Request, res: Response) {
		res.status(httpStatus.OK);

		res.json({
			message: "Tranking API by dimaslz",
		});
	}
}
