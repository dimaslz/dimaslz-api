import { connectDB, dropCollections, dropDB } from "~/test/settings/db-handler";

beforeAll(async () => {
	await connectDB();
});

afterAll(async () => {
	await dropDB();
});

afterEach(async () => {
	await dropCollections();
});
