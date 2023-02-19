# dimaslz resume as Rest API
This is my resume but from a Rest API.

## run the project

- `yarn dev`: developer mode to work in local
- `yarn build`: build `dist` folder
- `yarn serve`: serve `dist` folder
- `yarn test --verbose`: run all tests

## how works

| path | response |
| - | - |
| `/` | all my information as you can find in my PDF Resume and, some projects I am working in my free time. |
| `/:attribute` | Use any attribute name in the first level of the `/` response to get the information, as for example: `/name` your will see my name as return `{ data: "Dimas" }`
| `/projects` | List of the projects I am working |
| `/jobs` | List of my job history |


### wip
- [ ] open api specs
- [ ] dockerfile config


## Author
```js
{
	name: "Dimas López",
	role: "FullStack Software Engineer",
	alias: "dimaslz",
	twitter: "https://twitter.com/dimaslz",
	site: "https://dimaslz.dev",
	linkedin: "https://www.linkedin.com/in/dimaslopezzurita"
}
```