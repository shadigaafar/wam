import ThemeProvider from "../src/contexts/theme-provider";
export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<ThemeProvider theme="default">
			<Story />
		</ThemeProvider>
	),
];
