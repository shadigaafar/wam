import styled from "@emotion/styled";
import React, { forwardRef, HTMLAttributes } from "react";

export interface PaperProps extends HTMLAttributes<any> {
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

export const Paper = forwardRef(
	(
		{ children, elevation, htmlComponent, square }: PaperProps,
		ref: React.LegacyRef<HTMLDivElement>
	) => {
		return (
			<StyledPaper
				as={htmlComponent}
				square={square}
				ref={ref}
				elevation={elevation}
			>
				{children}
			</StyledPaper>
		);
	}
);

export default Paper;
