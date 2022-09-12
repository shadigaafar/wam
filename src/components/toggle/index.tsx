import styled from "@emotion/styled";
import { forwardRef, InputHTMLAttributes } from "react";

export interface ToggleProps extends InputHTMLAttributes<HTMLInputElement> {
	toggleSize: "big" | "small";
}

const Label = styled.label<{
	toggleSize: ToggleProps["toggleSize"];
}>`
	position: relative;
	display: inline-block;
	width: ${(props) => (props.toggleSize === "small" ? "51.7px" : "60px")};
	height: ${(props) => (props.toggleSize === "small" ? "27.5px" : "32px")}; ;
`;

const Slider = styled.span<{ toggleSize: ToggleProps["toggleSize"] }>`
	position: absolute;
	cursor: pointer;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #ccc;
	-webkit-transition: 0.4s;
	transition: 0.4s;
	border-radius: 34px;
	&:before {
		position: absolute;
		content: "";
		height: calc(100% - 10px);
		aspect-ratio: 1 / 1;
		top: 50%;

		transform: translate(5px, -50%);
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}
`;
const Input = styled.input<{ toggleSize: ToggleProps["toggleSize"] }>`
	opacity: 0;
	width: 0;
	height: 0;
	&:checked + span {
		background-color: ${(props) => props.theme.pallette.primary.main};
	}
	&:checked + span:before {
		top: 50%;

		transform: ${(props) =>
			props.toggleSize === "small"
				? "translate(25.8px, -50%)"
				: "translate(30px, -50%)"};
	}
`;
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
	({ toggleSize, ...props }, ref) => {
		return (
			<Label className="switch" toggleSize={toggleSize}>
				<Input
					type="checkbox"
					toggleSize={toggleSize}
					ref={ref}
					{...props}
				/>
				<Slider
					className="slider round"
					toggleSize={toggleSize}
				></Slider>
			</Label>
		);
	}
);

export default Toggle;
