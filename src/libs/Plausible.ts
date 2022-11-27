import axios from "axios";

type Data = {
	name: string;
	url: string;
	domain: string;
	props: object;
};

type Headers = {
	["Content-Type"]?: string;
	["X-Forwarded-For"]: string;
	["User-Agent"]: string;
	["referer"]: string;
};

type Track = {
	data: Data;
	headers: Headers;
};

export default class Plausible {
	private contentType: string = "application/json";

	async track({ data, headers }: Track) {
		try {
			return axios({
				method: "POST",
				url: "https://plausible.io/api/event",
				headers: {
					"Content-Type": this.contentType,
					...headers,
				},
				data,
			});
		} catch (error) {
			console.log("ERORR", error.message);
		}
	}
}
