const js = require("@eslint/js");
const globals = require("globals");
const tseslint = require("typescript-eslint");
const prettier = require("eslint-plugin-prettier/recommended");
const importPlugin = require("eslint-plugin-import");
const simpleImportSort = require("eslint-plugin-simple-import-sort");

module.exports = tseslint.config(
	{ ignores: ["dist/**", "coverage/**", "**/*.d.ts", "src/public/**", "src/types/**"] },
	js.configs.recommended,
	tseslint.configs.base,
	prettier,
	{
		files: ["**/*.{js,ts}"],
		languageOptions: { globals: { ...globals.node } },
		plugins: { "@typescript-eslint": tseslint.plugin, import: importPlugin, "simple-import-sort": simpleImportSort },
		rules: {
			"array-callback-return": ["error", { checkForEach: true }],
			"no-await-in-loop": "error",
			"no-constant-binary-expression": "error",
			"no-constructor-return": "error",
			"no-promise-executor-return": "error",
			"no-self-compare": "error",
			"no-template-curly-in-string": "error",
			"no-unmodified-loop-condition": "error",
			"no-unreachable-loop": "error",
			"no-unused-private-class-members": "error",
			"require-atomic-updates": "error",
			camelcase: ["error", { properties: "never" }],
			eqeqeq: "error",
			"new-cap": ["error", { capIsNew: false }],
			"no-array-constructor": "error",
			"no-console": ["warn", { allow: ["error"] }],
			"no-else-return": ["error", { allowElseIf: false }],
			"no-extend-native": "error",
			"no-lonely-if": "error",
			"no-param-reassign": "error",
			"no-return-assign": "error",
			"no-throw-literal": "error",
			"no-var": "error",
			"object-shorthand": "error",
			"prefer-const": "error",
			"prefer-rest-params": "error",
			"prefer-spread": "error",
			"prefer-template": "error",
			radix: "error",
			yoda: "error",
			curly: "error",
			"lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
			"padding-line-between-statements": ["error", { blankLine: "always", prev: "*", next: "return" }],
			"import/first": "error",
			"import/newline-after-import": "error",
			"prettier/prettier": ["error", { printWidth: 100, useTabs: true, tabWidth: 2 }],
			"simple-import-sort/exports": "error",
			"simple-import-sort/imports": "error",
			"no-unused-vars": "off",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ vars: "all", args: "after-used", argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{ prefer: "type-imports", fixStyle: "separate-type-imports" },
			],
			"@typescript-eslint/no-import-type-side-effects": "error",
			"import/no-duplicates": "error",
			"no-undef": "off",
		},
	}
);
