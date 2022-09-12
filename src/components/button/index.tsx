import React, { ButtonHTMLAttributes, forwardRef } from "react";
import styled from "@emotion/styled";
import { ColorType } from "../../contexts/theme-provider";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "primary" | "secondary" | "tertiary";
	square?: boolean;
	color?: ColorType;
}
const StyledButton = styled.button<ButtonProps>`
	display: inline-block;
	padding: ${(props) =>
		` ${props.theme.spacing(0.7)}  ${props.theme.spacing(2)}`};
	text-decoration: none;
	border: none;
	border-radius: ${(props) => {
		if (props.square) {
			return 0;
		}
		if (props.theme.shape.square) {
			return 0;
		}
		return props.theme.shape.borderRadius;
	}};
	&:hover {
		cursor: pointer;
	}

	${(props) =>
		props.variant === "primary" &&
		`background-color: ${props.theme.pallette.primary.main};
		color: ${props.theme.pallette.primary.contrastText};
		&:hover {
		background-color: ${props.theme.pallette.primary.dark}
		`};
	${(props) =>
		props.variant === "secondary" &&
		`border: 1px solid  ${props.theme.pallette.primary.main};
		color: ${props.theme.pallette.primary.main};
		background: none;
		&:hover {
		background-color: #E3E3E3;
		color: ${props.theme.pallette.primary.dark};
		border: 1px solid  ${props.theme.pallette.primary.dark}
		}`};
	${(props) =>
		props.variant === "tertiary" &&
		`background: none;
		outline: 1px solid transparent;
		color: ${props.theme.pallette.primary.main};
		&:hover {
		color: ${props.theme.pallette.primary.dark};
		outline: 1px solid  ${props.theme.pallette.primary.dark}
		`};

	transition: ${(props) => props.theme.transitions.ease.inOut};
	color: ${(props) =>
		props.theme.pallette.getColor(props?.color ? props.color : "primary")};
`;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	({ children, variant, square, ...rest }, ref) => {
		return (
			<StyledButton
				variant={variant ? variant : "primary"}
				square={square}
				ref={ref}
				{...rest}
			>
				{children}
			</StyledButton>
		);
	}
);
export default Button;
