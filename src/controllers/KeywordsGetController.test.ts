import httpStatus from "http-status";
import { describe, expect, it, vi } from "vitest";

import KeywordsGetController from "./KeywordsGetController";

describe("Keywords get controller: GET /keywords", () => {
	it("should return all the project and job keywords by default", async () => {
		const keywordsGetController: KeywordsGetController = new KeywordsGetController();

		const status = vi.fn((v) => v);
		const json = vi.fn((v) => v);
		const result = await keywordsGetController.run.bind(keywordsGetController)(
			{
				params: { attribute: null },
				query: { s: null },
			},
			{
				status,
				json,
			},
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data.length).toBe(86);

		expect(result).toMatchSnapshot();
	});
});
