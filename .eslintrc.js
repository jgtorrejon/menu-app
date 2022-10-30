module.exports = {
	root: true,
	extends: ["@react-native-community"],
	plugins: ["import"],
	env: {
		"react-native/react-native": true,
	},
	rules: {
		"no-console": "error",
		quotes: ["error", "double"],
	},
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			rules: {
				"react/react-in-jsx-scope": "off",
				"@typescript-eslint/explicit-function-return-type": ["off"],
				"@typescript-eslint/no-unused-vars": ["error"],
			},
		},
	],
};
