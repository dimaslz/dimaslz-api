import { Request, Response } from "express";
import httpStatus from "http-status";

import data from "../data";
import { Controller } from "./Controller";

export default class KeywordsGetController implements Controller {
	async run(req: Request<{ attribute: string }, never, never, never>, res: Response) {
		res.status(httpStatus.OK);

		const jobs = data.jobs;
		const jobsKeywords = jobs.reduce((acc, curr) => [...acc, ...curr.keywords], []);

		const projects = data.projects;
		const projectsKeywords = projects.reduce((acc, curr) => [...acc, ...curr.keywords], []);

		const keywords = [...jobsKeywords, ...projectsKeywords].reduce((acc, curr) => {
			if (!acc.includes(curr)) {
				acc.push(curr);
			}

			return acc;
		}, []);

		return res.json({
			data: keywords,
		});
	}
}
