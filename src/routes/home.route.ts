import { Express } from "express";

import HomeGetController from "@/controllers/HomeGetController";

export const register = (app: Express) => {
	const homeGetController: HomeGetController = new HomeGetController();

	app.get("/:attribute?", homeGetController.run.bind(homeGetController));
};
