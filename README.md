# @warp-ds/eslint-config

Shared config for ESLint used in warp-ds modules.

## Install

```
pnpm add -D eslint @warp-ds/eslint-config prettier
```

## Usage

Create and add this to `eslint.config.js`:

```js
import config from "@warp-ds/eslint-config";

export default config;
```

Create and add this to `prettier.config.js`:

```js
export default {
	useTabs: true,
	overrides: [
		{
			files: ["*.yml", "*.yaml", "*.json"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
};
```

The default config should cover most needs, but you can extend or override if you need to.

```js
import config from "@warp-ds/eslint-config";

export default [
	...config,
	/* Your customisations */
	{
		ignores: [".astro/*"],
	},
];
```

If you do need to change the config, consider whether that change should happen here in the shared config so it applies to all repos.

### TypeScript

This module indluces a base configuration for [typescript-eslint](https://typescript-eslint.io/).

First, install the required dependencies.

```
npm install --save-dev typescript eslint typescript-eslint @warp-ds/eslint-config
```

Create and add this to `eslint.config.js`:

```js
import config from "@warp-ds/eslint-config/typescript";

export default config;
```

The default config should cover most needs, but you can extend or override if you need to.

```js
import config from "@warp-ds/eslint-config/typescript";

export default [
	...config,
	/* Your customisations */
	{
		ignores: [".astro/*"],
	},
];
```
