import globals from "globals";
import tseslint from "typescript-eslint";
import base from "./base.js";

/** @type {import("@typescript-eslint/utils").TSESLint.FlatConfig.ConfigFile} */
const config = [
	...tseslint.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
			},
		},
	},
];

export default [...base, ...config];
