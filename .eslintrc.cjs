module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules', 'public'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	plugins: ['react-refresh', 'react-compiler', 'prettier'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'@typescript-eslint/no-explicit-any': 'error',
		'react-compiler/react-compiler': 'error',
		'@typescript-eslint/no-namespace': 'off',
		'no-duplicate-imports': 'error',
		'@typescript-eslint/no-unused-vars': 'warn',
		'prettier/prettier': ['error'],
	},
};
