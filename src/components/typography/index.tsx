import { useTheme } from "@emotion/react";
import React, { forwardRef, HTMLAttributes } from "react";

export interface TypographyProps
	extends HTMLAttributes<HTMLParagraphElement & HTMLHeadingElement> {
	htmlComponent: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small";
	variant: "primary" | "secondary";
}

export const Typography = forwardRef<
	HTMLParagraphElement & HTMLHeadingElement,
	TypographyProps
>(({ htmlComponent, children, style, ...props }, ref) => {
	const Root = htmlComponent
		? htmlComponent
		: ("p" as React.ElementType<any>);
	const theme = useTheme();
	return (
		<Root
			ref={ref}
			{...props}
			style={{
				color:
					props.variant === "secondary"
						? theme.pallette.text.secondary
						: theme.pallette.text.primary,
				...style,
			}}
		>
			{children}
		</Root>
	);
});

export default Typography;
