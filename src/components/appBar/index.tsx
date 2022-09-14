import { forwardRef } from "react";
import Paper from "../paper";
import { PaperProps } from "../paper";
import styled from "@emotion/styled";

export interface AppBarProps extends PaperProps {
	position: "static" | "fixed" | "absolute";
}

const Bar = styled(Paper)<{ position: AppBarProps["position"] }>`
	position: ${(props) => props.position};
	display: inline-flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	min-height: 64px;
	background-color: ${(props) => props.theme.pallette.primary.main};
	color: ${(props) => props.theme.pallette.primary.contrastText};
`;

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>(
	({ children, position, ...props }, ref) => {
		return (
			<Bar
				square={true}
				elevation={5}
				position={position ? position : "static"}
				ref={ref}
				{...props}
			>
				{children}
			</Bar>
		);
	}
);

export default AppBar;
