import httpStatus from "http-status";

import HomeGetController from "./HomeGetController";

describe("Home get controller: GET /", () => {
	const env = process.env;

	beforeEach(() => {
		jest.resetModules();
		process.env = { ...env };
	});

	afterEach(() => {
		process.env = env;
	});

	it("should return the full data by default", async () => {
		const homeGetController: HomeGetController = new HomeGetController();

		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await homeGetController.run.bind(homeGetController)(
			{
				params: { attribute: null },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);

		expect(result).toMatchSnapshot();
	});

	it("should return the correct resource /jobs", async () => {
		const homeGetController: HomeGetController = new HomeGetController();

		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await homeGetController.run.bind(homeGetController)(
			{
				params: {
					attribute: "jobs",
				},
				query: { s: null },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data.length).toBe(4);

		expect(result).toMatchSnapshot();
	});

	it("should return the correct resource /jobs with a correct filter", async () => {
		const homeGetController: HomeGetController = new HomeGetController();

		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await homeGetController.run.bind(homeGetController)(
			{
				params: {
					attribute: "jobs",
				},
				query: { s: "vue" },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data.length).toBe(3);

		expect(result).toMatchSnapshot();
	});

	it("should return the correct resource /name", async () => {
		const homeGetController: HomeGetController = new HomeGetController();

		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await homeGetController.run.bind(homeGetController)(
			{
				params: {
					attribute: "name",
				},
				query: { s: null },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data).toBe("Dimas");

		expect(result).toMatchSnapshot();
	});

	it("should return the correct resource /phone", async () => {
		const phone = "+34 000 000 000";
		process.env.DATA_PHONE = phone;

		const homeGetController: HomeGetController = new HomeGetController();
		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await homeGetController.run.bind(homeGetController)(
			{
				params: {
					attribute: "phone",
				},
				query: { s: null },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data).toBe(phone);

		expect(result).toMatchSnapshot();
	});

	it("should return the correct resource /email", async () => {
		const email = "your@email.com";
		process.env.DATA_EMAIL = email;

		const homeGetController: HomeGetController = new HomeGetController();
		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await homeGetController.run.bind(homeGetController)(
			{
				params: {
					attribute: "email",
				},
				query: { s: null },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.OK);
		expect(result.data).toBe(email);

		expect(result).toMatchSnapshot();
	});

	it("resource does not exists", async () => {
		const homeGetController: HomeGetController = new HomeGetController();

		const status = jest.fn((v) => v);
		const json = jest.fn((v) => v);
		const result = await homeGetController.run.bind(homeGetController)(
			{
				params: { attribute: "something" },
			},
			{
				status,
				json,
			}
		);

		expect(status).toHaveBeenCalledWith(httpStatus.NOT_FOUND);
		expect(json).toHaveBeenCalledWith({ message: "Resource data not found", status: 404 });
		expect(result).toEqual({ message: "Resource data not found", status: 404 });
	});
});
