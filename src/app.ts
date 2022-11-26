import dotenv from "dotenv";
import fs from "fs";

import { Server } from "./server";

if (fs.existsSync(".env")) {
	console.info("Using .env file to supply config environment variables");
	dotenv.config({ path: ".env" });
} else {
	console.info("Using .env.example file to supply config environment variables");
	dotenv.config({ path: ".env.example" }); // you can delete this after you create your own .env file!
}

export class App {
	server?: Server;

	async start() {
		const port = process.env.PORT || "3000";
		this.server = new Server(port);

		return this.server.listen();
	}

	get httpServer() {
		return this.server?.getHTTPServer();
	}

	async stop() {
		return this.server?.stop();
	}
}
