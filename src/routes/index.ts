import type { Router } from "express";
import { globSync } from "glob";

export function registerRoutes(router: Router) {
	const routes = globSync(`${__dirname}/**/*.route.*`);
	routes.map((route) => register(route, router));
}

function register(routePath: string, app: Router) {
	const route = require(routePath);
	route.register(app);
}
