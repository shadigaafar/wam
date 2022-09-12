import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef, InputHTMLAttributes } from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {}

const RadioRoot = styled.span`
	--size: 20px;
	width: var(--size);
	height: var(--size);
	border: 2px solid;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	border-color: ${(props) => props.theme.pallette.text.primary};
	cursor: pointer;
	& > input:checked ~ span {
		opacity: 1;
	}
`;
const Label = styled.label`
	display: flex;
	justify-content: flex-start;
	gap: 10px;
	&:not(:last-of-type) {
		margin-bottom: 10px;
	}
`;
const RadioInput = styled.input`
	display: none;
`;
const CheckMark = styled.span`
	width: calc(100% - 6px);
	height: calc(100% - 6px);
	border-radius: 50%;
	background-color: ${(props) => props.theme.pallette.primary.main};
	opacity: 0;
	transition: opacity 0.3s ease;
	display: inline-block;
`;

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
	({ onClick, ...props }, ref) => {
		const theme = useTheme();
		const colorizeBorder = (e: React.MouseEvent<HTMLInputElement>) => {
			const radioWrapper = document.querySelectorAll(
				".wam-radio__wrapper"
			) as NodeListOf<HTMLElement>;
			radioWrapper?.forEach((value) => {
				value.style.borderColor = theme.pallette.text.primary;
			});
			const root = (e.target as HTMLElement).parentElement;
			if (root) {
				root.style.borderColor = theme.pallette.primary.main;
			}
			if (onClick) {
				onClick(e);
			}
		};

		return (
			<Label className="wam-radio">
				<RadioRoot className="wam-radio__wrapper">
					<RadioInput
						type="radio"
						ref={ref}
						onClick={colorizeBorder}
						{...props}
					/>
					<CheckMark />
				</RadioRoot>
				<span className="label">Choice B</span>
			</Label>
		);
	}
);

export default Radio;
