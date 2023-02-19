import httpStatus from "http-status";

import ProjectsGetController from "./ProjectsGetController";

describe("Projects get controller: GET /projects", () => {
	it("should return all projects by default", async () => {
		const projectsGetController: ProjectsGetController = new ProjectsGetController();

		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await projectsGetController.run.bind(projectsGetController)(
			{
				query: { s: null },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data.length).toBe(9);

		expect(result).toMatchSnapshot();
	});

	it("should return projects which match with the query", async () => {
		const projectsGetController: ProjectsGetController = new ProjectsGetController();

		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await projectsGetController.run.bind(projectsGetController)(
			{
				query: { s: "typescript" },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data.length).toBe(7);

		expect(result).toMatchSnapshot();
	});
});
