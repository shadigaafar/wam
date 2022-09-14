import { ReactNode } from "react";
import { Theme } from "@emotion/react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import CssGlobal from "../components/css-global";

type Props = {
	children: ReactNode;
};

export type ColorType = "primary" | "secondary" | "error" | "success" | string;

type ColorVariant = "main" | "dark" | "light";

declare module "@emotion/react" {
	export interface Theme {
		direction: "ltr" | "rtl";
		pallette: {
			primary: {
				main: string;
				dark: string;
				light: string;
				contrastText: string;
			};
			secondary: {
				main: string;
				dark: string;
				light: string;
				contrastText: string;
			};
			error: {
				main: string;
				contrastText: string;
			};
			success: {
				main: string;
				contrastText: string;
			};
			background: {
				paper: string;
				default: string;
			};
			divider: string;
			text: {
				primary: string;
				secondary: string;
			};
			getColor: (color: ColorType, colorVariant?: ColorVariant) => string;
		};
		spacing: (space: number) => string;
		shape: {
			square: boolean;
			borderRadius: string;
		};
		shadow: (base?: number) => string;
		actions: {
			hover: string;
			selected: string;
		};
		transitions: {
			ease: {
				inOut: string;
			};
		};
		typography: {
			body1: {
				fontFamily: string;
				fontWeight: number;
				fontSize: string;
				lineHeight: number;
			};
			h1: {
				fontFamily: string;
				fontWeight: number;
				fontSize: string;
				lineHeight: number;
			};
			h2: {
				fontFamily: string;
				fontWeight: number;
				fontSize: string;
				lineHeight: number;
			};
			h3: {
				fontFamily: string;
				fontWeight: number;
				fontSize: string;
				lineHeight: number;
			};
			h4: {
				fontFamily: string;
				fontWeight: number;
				fontSize: string;
				lineHeight: number;
			};
			h5: {
				fontFamily: string;
				fontWeight: number;
				fontSize: string;
				lineHeight: number;
			};
			h6: {
				fontFamily: string;
				fontWeight: number;
				fontSize: string;
				lineHeight: number;
			};
			button: {
				fontFamily: string;
				fontWeight: number;
				fontSize: string;
				lineHeight: number;
			};
			inherit: {
				fontFamily: "inherit";
				fontWeight: "inherit";
				fontSize: "inherit";
				lineHeight: "inherit";
			};
		};
	}
}

const spacing = (space: number) => {
	return 8 * space + "px";
};

const shadowing = (base: number = 1) => {
	return `0px ${base / 1.4}px ${2.5 + base / 2}px ${
		base / 100
	}px rgba(0,0,0,0.2)`;
};

const getColor = (
	color: ColorType = "primary",
	colorVariant: ColorVariant = "main"
): string => {
	const colorVariants = ["main", "dark", "light"];
	const variant = colorVariants.includes(colorVariant)
		? colorVariant
		: "main";

	switch (color) {
		case "primary":
			return theme.pallette.primary[variant];

		case "secondary":
			return theme.pallette.secondary[variant];

		case "error":
			return theme.pallette.error.main;

		case "success":
			return theme.pallette.success.main;
		default:
			return color ? color : theme.pallette.primary[variant];
	}
};

const theme: Theme = {
	direction: "ltr",
	pallette: {
		primary: {
			main: "#ff4089",
			light: "#f95d9c",
			dark: "#c9316f",
			contrastText: "#fff",
		},
		secondary: {
			main: "#ff4089",
			light: "#f95d9c",
			dark: "#c9316f",
			contrastText: "#fff",
		},
		error: {
			main: "#d32f2f",
			contrastText: "#fff",
		},
		success: {
			main: "#2e7d32",
			contrastText: "#fff",
		},
		background: {
			paper: "#fff",
			default: "#fff",
		},
		divider: "rgba(0, 0, 0, 0.12)",
		text: {
			primary: "#000",
			secondary: "rgba(0, 0, 0, 0.6)",
		},
		getColor: getColor,
	},
	spacing: spacing,
	shape: {
		square: false,
		borderRadius: "5px",
	},
	shadow: shadowing,
	actions: {
		hover: "rgba(0, 0, 0, 0.04)",
		selected: "rgba(0, 0, 0, 0.5)",
	},
	transitions: {
		ease: {
			inOut: "all 400ms ease-in-out",
		},
	},
	typography: {
		body1: {
			fontFamily: "'Roboto','Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.5,
		},
		h1: {
			fontFamily: "'Roboto','Helvetica', 'Arial', sans-serif",
			fontWeight: 300,
			fontSize: "6rem",
			lineHeight: 1.16,
		},
		h2: {
			fontFamily: "'Roboto','Helvetica', 'Arial', sans-serif",
			fontWeight: 300,
			fontSize: "3.75rem",
			lineHeight: 1.2,
		},
		h3: {
			fontFamily: "'Roboto','Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: "3.75rem",
			lineHeight: 1.167,
		},
		h4: {
			fontFamily: "'Roboto','Helvetica', 'Arial', sans-serif",
			fontWeight: 400,
			fontSize: "2.125rem",
			lineHeight: 1.235,
		},
		h5: {
			fontFamily: "'Roboto','Helvetica', 'Arial', sans-serif",
			fontWeight: 300,
			fontSize: "1.5rem",
			lineHeight: 1.334,
		},
		h6: {
			fontFamily: "'Roboto','Helvetica', 'Arial', sans-serif",
			fontWeight: 500,
			fontSize: "1.25rem",
			lineHeight: 1.6,
		},
		button: {
			fontFamily: "'Roboto','Helvetica', 'Arial', sans-serif",
			fontWeight: 500,
			fontSize: "0.875rem",
			lineHeight: 1.75,
		},
		inherit: {
			fontFamily: "inherit",
			fontWeight: "inherit",
			fontSize: "inherit",
			lineHeight: "inherit",
		},
	},
};

function ThemeProvider({ children }: Props) {
	return (
		<EmotionThemeProvider theme={theme}>
			<>
				<CssGlobal
					styles={{
						body: theme.typography.body1,
						h1: theme.typography.h1,
						h2: theme.typography.h2,
						h3: theme.typography.h3,
						h4: theme.typography.h4,
						h5: theme.typography.h5,
						h6: theme.typography.h6,
						button: theme.typography.button,
						["button:hover"]: {
							backgroundColor: theme.actions.hover,
							cursor: "pointer",
						},
					}}
				/>
				{children}
			</>
		</EmotionThemeProvider>
	);
}

export default ThemeProvider;
