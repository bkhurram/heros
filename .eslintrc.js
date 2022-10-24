module.exports = {
	root: true,
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [],
	extends: [
		"react-app",
		"react-app/jest",
	],
};
