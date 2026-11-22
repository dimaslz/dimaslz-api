import type { DimaslzData } from "@/types";

const { DATA_EMAIL, DATA_PHONE } = process.env;

export default {
	name: "Dimas",
	lastname: "López Zurita",
	title: "Engineering Manager, Leadership & Full-Stack Engineer",
	email: DATA_EMAIL,
	baseOn: {
		country: "Spain",
		city: "Barcelona",
	},
	alias: "dimaslz",
	phone: DATA_PHONE,
	introduction: `Software & Engineering Manager (Hands-on) with over a decade of experience on software engineering, deeply involved in architecture and software development. I specialize in transforming engineering organizations through technical leadership, platform modernization, automation, and a strong engineering culture.

My approach combines strategic thinking with hands-on execution. I enjoy solving complex technical challenges, mentoring engineers, improving developer experience, and driving initiatives that increase product quality, operational efficiency, and business impact. Whether leading teams through organizational change, modernizing legacy systems, improving application performance, or establishing engineering standards, I focus on delivering sustainable solutions with measurable results.

I believe the best engineering leaders stay close to both the product and the people. I lead by example, promote ownership and collaboration, and create environments where engineers can grow while delivering reliable, scalable software that makes a real difference for customers.`,
	coverLetter: `I am a passionate technology professional with over a decade of experience in Full Stack development. I bring an entrepreneurial spirit and a continuous drive for learning to each project I undertake.

	In my quest for new challenges, I actively engage in side projects that sharpen my skills and expand my understanding of emerging technologies.

	My ability to empathize with team needs and grasp the holistic view of our products allows me to contribute effectively to our collective goals. Through a supportive and positive approach, I not only enhance the codebase but also the team dynamic.

	As a previous leader of around 14-member development team, I've spearheaded initiatives to optimize team support and company productivity. My proactive stance on problem-solving, coupled with a pragmatic balance between best practices and practical value, has consistently led to improvements in product quality.

	In my previous positions, I faced challenges from the front line as a leader of around 14 developers, aiming to provide the best support to the teams and the company. I am proactive in finding solutions and making product improvements without waiting for instructions, always validating changes with the team. I strive to provide solutions while maintaining a pragmatic mindset, finding the balance between best practices, value and quality.

	With a history of working in diverse, cross-functional teams, I am well-prepared for remote collaboration. My core values include empathy, transparency, and a willingness to both mentor and learn.

	I am excited about the possibility of bringing my blend of experience, innovation, and collaborative spirit to the company. I look forward to the opportunity to discuss how my background, skills, and enthusiasms can contribute to your exciting product.`,
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
		"management",
		"leadership",
	],
	jobs: [
		{
			title: "Engineering Manager (hands-on) & Lead Software Engineer",
			company: "The Knot Worldwide",
			promotion: true,
			date: {
				from: {
					month: "Apr",
					year: "2025",
				},
				to: {
					month: "current",
					year: "current",
				},
			},
			baseOn: {
				country: "Spain",
				city: "Barcelona",
				mode: "hybrid",
			},
			description: `Hands-on Engineering Manager with a strong platform engineering background who combines technical depth, people leadership, type coding, and product ownership. Experienced leading engineering organizations through periods of change while modernizing platforms, improving performance, driving engineering excellence, mentoring teams, and delivering measurable business outcomes as possible.

			The following are some of the highlights, got thanks to my team, during my time as Engineering Manager and Lead Software Engineer:

			ENGINEERING LEADERSHIP
			- Successfully led engineering during a period of organizational transition, assuming responsibilities beyond the role without formal direction.
			- Managed and mentored a team of engineers while remaining an active technical contributor.
			- Extended leadership beyond direct reports by mentoring engineers across teams
			- Built trust through a servant leadership approach, staying close to engineering teams and leading by example.

			OWNERSHIP & ORGANIZATIONAL IMPACT
			- Took ownership of critical engineering operations, tooling, budgets, and day-to-day engineering management during leadership gaps.
			- Helped maintain team engagement and delivery despite challenges, while protecting team performance and retaining engineering focus.
			- Identified, prioritized, and advocated for technical debt as part of engineering planning and OKRs.
			- Proactively drove engineering improvements without waiting for direction.

			TEAM IMPACT & TECHNICAL LEADERSHIP
			- Modernization of the engineering platform across multiple repositories.
			- Improved security posture and reducing infrastructure footprint (~15% image size reduction).
			- Migration of a legacy to latest engine version, enabling long-term maintainability and reducing dependency risks.
			- Championed engineering standards, CI/CD improvements, and reusable GitHub Actions across repositories.
			- Setup strategy for migrating end-to-end testing from Cypress to a centralized Playwright monorepo.
			- Established secure coding practices and engineering standards through technical leadership.

			PRODUCT & PERFORMANCE IMPACT
			- Reduced application page size from ~40 MB to ~9 MB.
			- Reduced network requests from ~145 to ~50.
			- Improved page load time from ~3s to ~1.5s.
			- Reduced homepage payload from ~25 MB to ~3 MB through image optimization.
			- Automated operational workflows through Contentful, eliminating recurring manual BAU tasks.
			- Contributed to infrastructure optimization resulting in approximately important annual cloud savings.
			- Improved application readiness for SEO, SSR, and future AI/LLM initiatives.

			DELIVERY
			- Delivered strategic product initiatives.
			- Successfully delivered high-impact projects despite organizational instability and limited engineering capacity.
			- Encouraged teams to validate ideas through proofs of concept before committing to full implementation.

			MANAGEMENT & MENTORING
			- Conducted regular 1:1s, coaching, and career mentoring.
			- Mentored engineers outside direct reporting lines.
			- Helped engineers increase ownership, visibility, and technical impact.
			- Balanced people management with hands-on software engineering.

			skills: Engineering Management, Hands-on Engineering Manager, Technical Leadership, Software Architecture, Full Stack Engineering, Platform Engineering, Developer Experience (DevEx), Performance Optimization, CI/CD, GitHub Actions, Next.js, React, TypeScript, Node.js, Redis, MySql, PostgreSQL, AWS, Docker, Akamai, Kubernetes, Playwright, Testing Strategy, Engineering Excellence, Technical Debt Management, Staff Engineering, Team Leadership, Mentoring, Cross-functional Leadership, Agile Delivery, Engineering Strategy, Platform Modernization, Security, Observability.
			`,
			keywords: [
				"Engineering Management",
				"Hands-on Engineering Manager",
				"Technical Leadership",
				"Software Architecture",
				"Full Stack Engineering",
				"Platform Engineering",
				"Developer Experience (DevEx)",
				"Performance Optimization",
				"CI/CD",
				"GitHub Actions",
				"Next.js",
				"React",
				"TypeScript",
				"Node.js",
				"Redis",
				"MySql",
				"PostgreSQL",
				"AWS",
				"Docker",
				"Akamai",
				"Kubernetes",
				"Playwright",
				"Testing Strategy",
				"Engineering Excellence",
				"Technical Debt Management",
				"Staff Engineering",
				"Team Leadership",
				"Mentoring",
				"Cross-functional Leadership",
				"Agile Delivery",
				"Engineering Strategy",
				"Platform Modernization",
				"Security",
				"Observability",
			],
		},
		{
			title: "Lead Software Engineer",
			company: "The Knot Worldwide",
			date: {
				from: {
					month: "Dec",
					year: "2023",
				},
				to: {
					month: "Apr",
					year: "2025",
				},
			},
			baseOn: {
				country: "Spain",
				city: "Barcelona",
				mode: "remote",
			},
			description: `- Led technical ownership across multiple product areas, combining architecture, platform engineering, delivery strategy, and team leadership.

			- Designed and rolled out dynamic development environments and a new Continuous Delivery workflow, enabling engineers to independently test complex changes and perform multiple deployments per day.

			- Built internal developer tooling and CI/CD automation covering deployments, release management, changelogs, GitHub workflows, and Slack notifications, significantly reducing manual engineering operations.

			- Transformed release and deployment processes into self-service workflows, reducing dependency on individual engineers and increasing team autonomy and operational resilience.

			- Led platform modernization initiatives including Node.js and React upgrades, monorepo foundations, CI/CD improvements, API architecture, and automated integration testing.

			- Mentored engineers across technical ownership, communication, documentation, and leadership, progressively delegating responsibilities and increasing their autonomy and organizational impact.

			- Established clearer engineering standards and technical sources of truth through architectural proposals, documentation, automation, and standardized development workflows.

			- Operated with high autonomy through changing product priorities, proactively identifying technical opportunities and balancing short-term product delivery with long-term platform improvements.

			skills: NextJS, Node, React, AWS, Akamai, Docker, Kubernetes, Cypress, Github, Redis, MySql, CI/CD...
			`,
			keywords: [
				"nextjs",
				"node",
				"react",
				"aws",
				"akamai",
				"docker",
				"kubernetes",
				"cypress",
				"github",
				"leadership",
				"redis",
				"mysql",
				"ci/cd",
			],
		},
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

			skills: Vue2, Vue3(pinia + TS), NuxtJS, NextJS, Jest, Testing Library, Cypress, Playwright, NodeJS+TS, Angular, React+TS, Docker, Vite, SockerIO, MongoDB, Redis, ...
			`,
			keywords: [
				"vue",
				"vue3",
				"pinia",
				"typescript",
				"nuxt",
				"next",
				"jest",
				"testing library",
				"playwright",
				"cypress",
				"node",
				"angular",
				"docker",
				"vite",
				"socketio",
				"mongodb",
				"mysql",
				"redis",
				"cloudflare",
				"learning",
			],
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

			skills: Vue2, Nuxt, Jest, Testing Library...`,
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
				"learning",
			],
		},
		{
			title: "Sabbatical Gap",
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
			keywords: ["learning"],
		},
		{
			title: "Engineering Manager (hands-on) & Lead Frontend Engineer",
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

			skills: vanilla js, vue (v2.x), vuex, sass, nuxt, nightwatch and cypress, jest, webpack, nodejs, babel, rollup, docker, scrum.`,
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
				"learning",
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
	status: ["Working at MySelf: open as freelance, mentor and consultant"],
	interests:
		"Entrepreneurship, business, web development, mobile, backend, devops, product, management, ...",
	projects: [
		{
			name: "ng-heroicons",
			description: "An Angular components library to use Heroicons.com in your Angular projects.",
			skills: ["typescript", "javascript", "angular", "nodejs", "tailwindcss"],
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
			url: "https://ng-heroicons.dimaslz.dev",
			repository: ["https://github.com/dimaslz/ng-heroicons"],
		},
		{
			name: "Framework icon builder",
			description: "A tool to create a framework icon component from a SVG",
			skills: ["nextjs", "nodejs", "tailwindcss"],
			stack: ["nextjs", "nodejs", "tailwindcss"],
			keywords: ["nextjs", "nodejs", "tailwindcss", "tools"],
			public: false,
			npm: null,
			url: "https://svg-icon-2-fw-component.dimaslz.dev",
			repository: [],
		},
		{
			name: "cv.dimaslz.dev",
			description: "My online CV",
			url: "https://cv.dimaslz.dev",
			skills: ["svelte", "tailwindcss", "typescript"],
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
			skills: ["nodejs", "typescript"],
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
			skills: ["javascript", "tailwindcss"],
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
			skills: ["nextjs", "typescript", "tailwindcss"],
			stack: ["nextjs", "typescript", "tailwindcss"],
			keywords: ["nextjs", "typescript", "tailwindcss"],
			public: true,
			npm: null,
			repository: ["https://github.com/dimaslz/dimaslz.io"],
		},
	],
} as DimaslzData;
