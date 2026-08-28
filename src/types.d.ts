export type BaseOn = {
	country: string;
	city: string;
	mode?: string;
};

export type Date = {
	month: string;
	year: string;
};

export type Project = {
	name: string;
	description: string;
	skills: Array<string>;
	stack: Array<string>;
	keywords: Array<string>;
	public: boolean;
	npm: string;
	url: string;
	repository: Array<string>;
};

export type Job = {
	title: string;
	company: string;
	date: {
		from: Date;
		to: Date;
	};
	baseOn: BaseOn;
	description: string;
	keywords: Array<string>;
};

export type Education = {
	date: {
		from: Date;
		to: Date;
	};
	baseOn: BaseOn;
	title: string;
	description: string;
}

export type DimaslzData = {
	name: string;
	lastname: string;
	title: string;
	email: string;
	baseOn: BaseOn;
	alias: string;
	phone: string;
	introduction: string;
	coverLetter: string;
	keywords: Array<string>;
	jobs: Array<Job>;
	network: {
		linkedin: string;
		github: string;
		twitter: string;
	};
	formerJobs: Array<string>;
	education: Array<Education>;
	status: Array<string>;
	interests: string;
	projects: Array<Project>
}