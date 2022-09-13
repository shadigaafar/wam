import styled from "@emotion/styled";
import React, { ButtonHTMLAttributes, forwardRef } from "react";
import { ColorType } from "../../contexts/theme-provider";

export interface IconButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	shape?: "square" | "rounded" | "circle";
	size?: "small" | "medium" | "large" | string;
	color?: ColorType;
	background?: boolean;
}

const StyledButton = styled.button<IconButtonProps>`
	display: inline-block;
	appearance: none;
	text-decoration: none;
	background: none;
	border: none;
	border-radius: ${(props) => {
		if (props.shape === "square") {
			return 0;
		}
		if (props.shape === "rounded") {
			return props.theme.shape.borderRadius;
		}
		return "50%";
	}};
	&:hover {
		cursor: pointer;
		background-color: ${(props) =>
			props.background
				? props.theme.pallette.getColor(
						props?.color ? props.color : "",
						"dark"
				  )
				: props.theme.actions.hover};
	}
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	flex: 0 0 auto;
	padding: 12px;
	overflow: visible;
	font-size: ${(props) => props.size};
	transition: ${(props) => props.theme.transitions.ease.inOut};
	color: ${(props) =>
		props.background
			? props.theme.pallette.primary.contrastText
			: props.theme.pallette.getColor(
					props?.color ? props.color : "primary"
			  )};
	background-color: ${(props) =>
		props.background ? props.theme.pallette.primary.main : "none"};
`;

const getSizeInRem = (size: IconButtonProps["size"] = "1.5rem"): string => {
	switch (size) {
		case "small":
			return "1rem";

		case "medium":
			return "1.5rem";

		case "large":
			return "1.75rem";

		default:
			return size;
	}
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
	(props, ref) => {
		const { children, size, color, ...rest } = props;

		return (
			<StyledButton ref={ref} size={getSizeInRem(size)} {...rest}>
				{children}
			</StyledButton>
		);
	}
);

export default IconButton;
