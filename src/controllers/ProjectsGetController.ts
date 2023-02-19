import { Request, Response } from "express";
import httpStatus from "http-status";

import { Controller } from "./Controller";

export default class ProjectsGetController implements Controller {
	async run(req: Request<{ attribute: string }, never, never, never>, res: Response) {
		let {
			default: { projects },
		}: any = await import("../data");

		const { s } = req.query;

		if (Array.isArray(projects) && s) {
			projects = projects.filter((item) => {
				return item.keywords.some((keyword) => keyword.includes(s));
			});
		}

		res.status(httpStatus.OK);

		return res.json({
			data: projects,
		});
	}
}
