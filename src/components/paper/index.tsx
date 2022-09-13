import styled from "@emotion/styled";
import React, { forwardRef, HTMLAttributes } from "react";

export interface PaperProps extends HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	elevation?: number;
	htmlComponent?: React.ElementType<any> | undefined;
	square?: boolean;
}

const StyledPaper = styled.div<PaperProps>`
	background-color: ${(props) => props.theme.pallette.background.paper};
	padding: ${(props) => props.theme.spacing(2)};
	border-radius: ${(props) => {
		if (props.square) {
			return 0;
		}
		if (props.theme.shape.square) {
			return 0;
		}
		return props.theme.shape.borderRadius;
	}};
	box-shadow: ${(props) => props.theme.shadow(props.elevation)};
`;

export const Paper = forwardRef<HTMLDivElement, PaperProps>(
	({ children, elevation, htmlComponent, square, ...props }, ref) => {
		return (
			<StyledPaper
				as={htmlComponent}
				square={square}
				ref={ref}
				elevation={elevation}
				{...props}
			>
				{children}
			</StyledPaper>
		);
	}
);

export default Paper;
