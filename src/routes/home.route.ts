import { Express } from "express";

import HomeGetController from "@/controllers/HomeGetController";
import KeywordsGetController from "@/controllers/KeywordsGetController";
import ProjectsGetController from "@/controllers/ProjectsGetController";

export const register = (app: Express) => {
	const homeGetController: HomeGetController = new HomeGetController();
	const keywordsGetController: KeywordsGetController = new KeywordsGetController();
	const projectsGetController: ProjectsGetController = new ProjectsGetController();

	app.get("/projects", projectsGetController.run.bind(projectsGetController));
	app.get("/keywords", keywordsGetController.run.bind(keywordsGetController));
	app.get("/:attribute?", homeGetController.run.bind(homeGetController));
};
