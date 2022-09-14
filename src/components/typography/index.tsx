import { css } from "@emotion/css";
import { Theme, useTheme } from "@emotion/react";
import React, { forwardRef, HTMLAttributes } from "react";

export interface TypographyProps
	extends HTMLAttributes<HTMLParagraphElement & HTMLHeadingElement> {
	htmlComponent?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small";
	variant?:
		| "body1"
		| "h1"
		| "h2"
		| "h3"
		| "h4"
		| "h5"
		| "h6"
		| "button"
		| "inherit";
	textPriority?: "primary" | "secondary" | "inherit";
}

interface RootProps
	extends HTMLAttributes<HTMLParagraphElement & HTMLHeadingElement> {
	htmlComponent: TypographyProps["htmlComponent"];
}
// const Root = forwardRef<HTMLElement, RootProps>(
// 	({ htmlComponent, children }, ref) => {
// 		return <TagName ref={ref}>{children}</TagName>;
// 	}
// );

export const Typography = forwardRef<
	HTMLParagraphElement & HTMLHeadingElement,
	TypographyProps
>(
	(
		{ htmlComponent, children, variant, className, textPriority, ...props },
		ref
	) => {
		const theme = useTheme();
		const TagName = htmlComponent
			? htmlComponent
			: ("p" as React.ElementType<any>);
		return (
			<TagName
				ref={ref}
				className={`${css`
					color: ${textPriority === "secondary"
						? theme.pallette.text.secondary
						: textPriority === "inherit"
						? "inherit"
						: theme.pallette.text.primary};
					${(theme.typography as any)?.[
						variant ? variant : "inherit"
					]};
				`} ${className}`}
				{...props}
			>
				{children}
			</TagName>
		);
	}
);

export default Typography;
