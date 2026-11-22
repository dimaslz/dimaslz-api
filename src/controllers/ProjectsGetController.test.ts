import httpStatus from "http-status";
import { describe, expect, it, vi } from "vitest";

import ProjectsGetController from "./ProjectsGetController";

describe("Projects get controller: GET /projects", () => {
	it("should return all projects by default", async () => {
		const projectsGetController: ProjectsGetController = new ProjectsGetController();

		const status = vi.fn((v) => v);
		const json = vi.fn((v) => v);
		const result = await projectsGetController.run.bind(projectsGetController)(
			{
				query: { s: null },
			},
			{
				status,
				json,
			},
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data.length).toBe(6);

		expect(result).toMatchSnapshot();
	});

	it("should return projects which match with the query", async () => {
		const projectsGetController: ProjectsGetController = new ProjectsGetController();

		const status = vi.fn((v) => v);
		const json = vi.fn((v) => v);
		const result = await projectsGetController.run.bind(projectsGetController)(
			{
				query: { s: "typescript" },
			},
			{
				status,
				json,
			},
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data.length).toBe(4);

		expect(result).toMatchSnapshot();
	});
});
