import prettierConfig from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import e18e from "@e18e/eslint-plugin";
import js from "@eslint/js";

export default [
	js.configs.recommended,
	prettierConfig,
	prettierPlugin,
	e18e.configs.recommended,
	{
		ignores: [
			"**/build/*",
			"**/coverage/*",
			"**/dist/*",
			"**/public/*",
			"**/node_modules/*",
			"**/tap-snapshots/*",
			"**/types/*",
		],
	},
	{
		files: ["**/*.test.js", "**/*.test.ts", "**/*.test.tsx", "**/*.test.jsx"],
		rules: {
			"e18e/prefer-static-regex": "off",
		},
	},
];
