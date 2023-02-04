import { Request, Response } from "express";
import httpStatus from "http-status";

import { Controller } from "./Controller";
import data from "./data";

export default class HomeGetController implements Controller {
	async run(req: Request, res: Response) {
		res.status(httpStatus.OK);

		res.json({ ...data });
	}
}
