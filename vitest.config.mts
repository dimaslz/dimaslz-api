import path from "node:path";

import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: [
			{ find: /^~\/(.*)/, replacement: `${path.resolve(".")}/$1` },
			{ find: /^@\/(.*)/, replacement: `${path.resolve("src")}/$1` },
		],
	},
	test: {
		environment: "node",
		include: ["src/**/*.{test,spec}.ts"],
		clearMocks: true,
	},
});
