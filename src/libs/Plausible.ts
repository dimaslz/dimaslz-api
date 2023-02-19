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
			return fetch("https://plausible.io/api/event", {
				method: "POST",
				headers: {
					"Content-Type": this.contentType,
					...headers,
				},
				body: JSON.stringify(data),
			});
		} catch (error) {
			console.log("ERORR", error.message);
		}
	}
}
