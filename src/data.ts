/* eslint-disable max-len */
const { DATA_EMAIL, DATA_PHONE } = process.env;

export default {
	name: "Dimas",
	lastname: "López Zurita",
	title: "Senior Software Engineer",
	email: DATA_EMAIL,
	baseOn: {
		country: "Spain",
		city: "Barcelona",
	},
	alias: "dimaslz",
	phone: DATA_PHONE,
	introduction:
		"Self-taught enthusiast and crazy about technology, I work in web technologies since 2011, from backend to frontend but also joining backend and mobile environments in parallel projects. I like innovation, entrepreneurial mindset and business stories. Learning, discovering, sharing and helping are the keys to my daily motivation.",
	keywords: [
		"javascript",
		"vue",
		"react",
		"angular",
		"nodejs+express",
		"nest",
		"software",
		"android",
		"ios",
		"react native",
		"svelte",
		"github actions",
		"aws",
		"testing library",
		"SAAS",
		"open source",
		"tooling",
		"learning",
		"kubernetes",
		"docker",
		"tailwindcss",
	],
	jobs: [
		{
			title: "Full Stack Engineer",
			company: "MySelf",
			date: {
				from: {
					month: "jun",
					year: "2021",
				},
				to: {
					month: "current",
					year: "current",
				},
			},
			baseOn: {
				country: "Spain",
				city: "Barcelona",
				mode: "remote",
			},
			description: `Consultant, Site projects, Learning and Mentoring

			Stack: Vue2, Vue3(pinia + TS), NuxtJS, NextJS, Jest, Testing Library, Cypress, Playwright, NodeJS+TS, Angular, React+TS, Docker, Vite, SockerIO, MongoDB, ...
			`,
		},
		{
			title: "Senior Frontend Engineer",
			company: "BackMarket",
			date: {
				from: {
					month: "august",
					year: "2021",
				},
				to: {
					month: "march",
					year: "2023",
				},
			},
			baseOn: {
				country: "Spain",
				city: "Barcelona",
				mode: "remote",
			},
			description: `Helping to deliver quality features, promoting good testing practices and working in performance. Involved in big migration projects for next company challenge.

			Stack: Vue2, Nuxt, Jest, Testing Library...`,
			keywords: [
				"vue2",
				"vuex",
				"nuxt",
				"jest",
				"testing library",
				"playwright",
				"cypress",
				"SOLID",
				"cloudflare",
			],
		},
		{
			title: "Sabbatical Year",
			company: null,
			date: {
				from: {
					month: "february",
					year: "2020",
				},
				to: {
					month: "august",
					year: "2021",
				},
			},
			baseOn: {
				country: "Spain",
				city: "Barcelona",
				mode: null,
			},
			description:
				"Personal break to focus in my mental health, think, study and work on my side projects and open-source. Self-training to improve as a professional and to be ready for the next challenge.",
			keywords: [],
		},
		{
			title: "Frontend Engineer - Lead/Manager",
			company: "Ubeeqo (Europcar Mobility Group)",
			date: {
				from: {
					month: "november",
					year: "2017",
				},
				to: {
					month: "february",
					year: "2020",
				},
			},
			baseOn: {
				country: "Spain",
				city: "Barcelona",
				mode: "office",
			},
			description: `Ubeeqo is one of the products of Europcar Mobility Group. I joined the company as a Frontend developer, I was promoted to be the responsible of all the web applications for Ubeeqo as a Frontend Manager/Lead.

			I grew the team from 4 to ~14 Frontend developers, while the company grew from ~15 to ~140 employees just in 2 years in Barcelona HUB.

			- Work in cross functional decissions
			- Define the frontend architecture for all web products in the company.
			- Define the UX interactions with layouts and components.
			- Define components library based in Vuejs.
			- Managed the Agile development process from specification to completion.
			- Define the pipeline test.
			- Develop and define e2e implementation.
			- Recruiting frontend and QA team.

			Stack: vanilla js, vue (v2.x), vuex, sass, nuxt, nightwatch and cypress, jest, webpack, nodejs, babel, rollup, docker, scrum.`,
			keywords: [
				"vue",
				"docker",
				"lidership",
				"nightwatch",
				"cypress",
				"jest",
				"testing nodejs",
				"scrum",
				"nuxt",
				"management",
			],
		},
		{
			title: "Previous experiences",
			company: "",
			date: {
				from: {
					month: "-",
					year: "2011",
				},
				to: {
					month: "-",
					year: "2015",
				},
			},
			baseOn: {
				country: "Spain",
				city: "Barcelona",
				mode: "office",
			},
			description: `I started as a back-end developer working with PHP, hen moved to full-stack development with Node.js and finally focused on front-end development. During these years I was able to solve many problems in different environments and adapting to different technologies.

			Worked Trovit, BeRepublic, FocusOnEmotions, Zyncro, Stuart Delivery and Instaply,

			Used JS, AngularJS, ReactJS, NodeJS, CSS, Stylus, Grunt, Gulp, Npm, CI, Scrum methodology and SOLID practices, SockerIO, PHP, ...`,
			keywords: ["php", "jquery", "nodejs", "angularjs", "npm", "ci", "scrum", "SOLID", "socketIO"],
		},
	],
	network: {
		linkedin: "https://www.linkedin.com/in/dimaslopezzurita",
		github: "https://github.com/dimaslz",
		twitter: "https://twitter.com/dimaslz",
	},
	formerJobs: [
		"Trovit",
		"BeRepublic",
		"FocusOnEmotions",
		"Zyncro",
		"Instaply",
		"Ubeeqo/Europcar Mobility Group",
	],
	education: [
		{
			date: {
				from: {
					month: "-",
					year: "2009",
				},
				to: {
					month: "-",
					year: "2011",
				},
			},
			baseOn: {
				city: "Santa Cruz de Tenerife",
				country: "Spain",
			},
			title: "Associate's Degree in Software Development",
			description:
				"Learning database management and software development in python, java and visual basic",
		},
	],
	status: ["Senior Frontend Engineer at Backmarket", "Working at MySelf"],
	interests:
		"Entrepreneurship, business, web development, mobile, backend, devops, product, management, ...",
	projects: [
		{
			name: "ng-heroicons",
			description: "An Angular components library to use Heroicons.com in your Angular projects.",
			stack: ["typescript", "javascript", "angular", "nodejs", "tailwindcss"],
			keywords: [
				"typescript",
				"javascript",
				"angular",
				"nodejs",
				"library",
				"components",
				"tailwindcss",
				"npm",
			],
			public: true,
			npm: "https://www.npmjs.com/package/@dimaslz/ng-heroicons",
			url: "https://ng-heroicons.dimaslz.dev/",
			repository: ["https://github.com/dimaslz/ng-heroicons"],
		},
		{
			name: "Randomdata",
			description: "A tool to create mock Api responses with your custom schema.",
			stack: ["typescript", "preact", "nodejs", "vitejs", "tailwindcss"],
			keywords: ["typescript", "preact", "nodejs", "vitejs", "tools", "api", "tailwindcss"],
			public: false,
			npm: null,
			url: "https://randomdata.loremapi.io/",
			repository: [],
		},
		{
			name: "Framework icon builder",
			description: "A tool to create a framework icon component from a SVG",
			stack: ["nextjs", "nodejs", "tailwindcss"],
			keywords: ["nextjs", "nodejs", "tailwindcss", "tools"],
			public: false,
			npm: null,
			url: "https://svg-icon-2-fw-component.dimaslz.dev",
			repository: [],
		},
		{
			name: "Fito deploy",
			description: "Deploy any project easily, like Vercel or Heroku but in your self hosting.",
			url: "https://fito-deploy.dimaslz.dev",
			stack: ["vitejs", "typescript", "vue3", "pinia", "tailwindcss", "docker", "github actions"],
			keywords: [
				"vitejs",
				"typescript",
				"vue3",
				"pinia",
				"tailwindcss",
				"docker",
				"tools",
				"github actions",
			],
			public: false,
			npm: null,
			repository: [],
		},
		{
			name: "Loremapi",
			description: "Mock and document your Api's",
			url: "https://loremapi.io",
			stack: ["angular", "nodejs", "tailwindcss", "typescript"],
			keywords: ["angular", "nodejs", "tailwindcss", "typescript", "tools", "api", "developers"],
			public: false,
			npm: null,
			repository: [],
		},
		{
			name: "cv.dimaslz.dev",
			description: "My online CV",
			url: "https://cv.dimaslz.dev",
			stack: ["svelte", "tailwindcss", "typescript"],
			keywords: ["svelte", "tailwindcss", "typescript", "cv", "landing"],
			public: true,
			npm: null,
			repository: ["https://github.com/dimaslz/dimaslz-cv"],
		},
		{
			name: "api.dimaslz.dev",
			description: "My professional info by API",
			url: "https://api.dimaslz.dev",
			stack: ["nodejs", "typescript"],
			keywords: ["nodejs", "typescript", "cv", "api"],
			public: true,
			npm: null,
			repository: ["https://github.com/dimaslz/dimaslz-api"],
		},
		{
			name: "dimaslz.dev",
			description: "Dev landing",
			url: "https://dimaslz.dev",
			stack: ["javascript", "tailwindcss"],
			keywords: ["javascript", "tailwindcss", "landing"],
			public: true,
			npm: null,
			repository: ["https://github.com/dimaslz/dimaslz.io-landing"],
		},
		{
			name: "dimaslz.com",
			description: "Profesional landing profile",
			url: "https://dimaslz.com",
			stack: ["nextjs", "typescript", "tailwindcss"],
			keywords: ["nextjs", "typescript", "tailwindcss"],
			public: true,
			npm: null,
			repository: ["https://github.com/dimaslz/dimaslz.io"],
		},
	],
};
