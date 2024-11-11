import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module',
			globals: {
				...globals.node,
			},
		},
		rules: {
			...prettierConfig.rules,
			'no-unused-vars': 'warn',
			'prettier/prettier': 'warn',
		},
		plugins: {
			prettier: prettierPlugin,
		},
	},
];
