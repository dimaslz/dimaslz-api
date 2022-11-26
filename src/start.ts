import { App } from "./app";

function handleError(e: any) {
	console.log(e);
	process.exit(1);
}

try {
	new App().start();
} catch (e) {
	handleError(e);
}

process.on("uncaughtException", (err) => {
	console.log("uncaughtException", err);
	process.exit(1);
});
