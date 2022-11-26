import { Express } from "express";

import TrackGetController from "@/controllers/TrackGetController";

export const register = (app: Express) => {
	const trackGetController: TrackGetController = new TrackGetController();

	app.get("/track", trackGetController.run.bind(trackGetController));
};
