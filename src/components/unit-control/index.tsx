import styled from "@emotion/styled";

import {
	useRef,
	useState,
	ChangeEvent,
	useLayoutEffect,
	forwardRef,
	useEffect,
	CSSProperties,
} from "react";

export interface UnitControlProps {
	onChange?: (value: string) => void;
	onChangeValue?: (value: number) => void;
	onChangeUnit?: (value: string) => void;
	size?: "small" | "medium" | "large" | string;
	square?: boolean;
	units: string[];
	style?: CSSProperties;
}

const getSizeInRem = (size: UnitControlProps["size"] = "1.5rem"): string => {
	switch (size) {
		case "small":
			return "1.6rem";

		case "medium":
			return "2rem";

		case "large":
			return "2.5rem";

		default:
			return size;
	}
};

const Root = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${(props) => props.theme.spacing(1)};
`;

const Input = styled.input<{
	sss?: UnitControlProps["size"];
	square?: boolean;
}>`
	appearance: textfield;
	&::-webkit-inner-spin-button {
		appearance: none;
	}
	background-color: transparent;
	box-sizing: border-box;
	border: none;
	color: rgb(30, 30, 30);
	display: block;
	font-family: inherit;
	outline: none;
	margin: 0px;
	max-width: 100px;
	width: 100%;
	font-size: inherit;
	height: ${(props) => getSizeInRem(props.sss)};
	line-height: 1;
	min-height: 1.6rem;
	padding-left: 8px;
	padding-right: 8px;
	box-shadow: none;
	&:focus {
		border-radius: ${(props) => {
			if (props.square) {
				return 0;
			}
			if (props.theme.shape.square) {
				return 0;
			}
			return props.theme.shape.borderRadius;
		}};
		box-shadow: 0px 0px 0px 2px
			${(props) => props.theme.pallette.primary.main};
	}
`;

const UnitSelect = styled.div`
	position: absolute;
	top: 0;
	left: ${(props) => (props.theme.direction === "rtl" ? 0 : " unset")};
	right: ${(props) => (props.theme.direction === "ltr" ? 0 : " unset")};
	height: 100%;
	max-width: fit-content;
	width: 100%;
`;

const UnitInput = styled.input<{ square?: boolean }>`
	position: relative;
	left: ${(props) => (props.theme.direction === "ltr" ? "2px" : 0)};
	right: ${(props) => (props.theme.direction === "rtl" ? "2px" : 0)};
	user-select: none;
	text-align: center;
	background: transparent;
	height: inherit;
	border: none;
	border-radius: 0;
	cursor: pointer;
	box-sizing: border-box;
	outline: 1.8px solid ${(props) => props.theme.pallette.primary.main};
	background-color: ${(props) => props.theme.pallette.primary.main};
	color: ${(props) => props.theme.pallette.primary.contrastText};
	border-top-right-radius: ${(props) => {
		if (props.theme.direction === "rtl") {
			return "none";
		}
		if (props.square) {
			return 0;
		}
		if (props.theme.shape.square) {
			return 0;
		}
		return props.theme.shape.borderRadius;
	}};
	border-bottom-right-radius: ${(props) => {
		if (props.theme.direction === "rtl") {
			return "none";
		}
		if (props.square) {
			return 0;
		}
		if (props.theme.shape.square) {
			return 0;
		}
		return props.theme.shape.borderRadius;
	}};
	border-top-left-radius: ${(props) => {
		if (props.theme.direction === "ltr") {
			return "none";
		}
		if (props.square) {
			return 0;
		}
		if (props.theme.shape.square) {
			return 0;
		}
		return props.theme.shape.borderRadius;
	}};
	border-bottom-left-radius: ${(props) => {
		if (props.theme.direction === "ltr") {
			return "none";
		}
		if (props.square) {
			return 0;
		}
		if (props.theme.shape.square) {
			return 0;
		}
		return props.theme.shape.borderRadius;
	}};
	user-select: none;
`;

const UnitOptionList = styled.ul`
	position: absolute;
	top: 0;
	padding: 5px;
	margin: 0;
	list-style-type: none;
	border: 1px solid ${(props) => props.theme.pallette.divider};
	cursor: pointer;
	width: fit-content;
	box-sizing: border-box;
`;

const UnitOption = styled.li`
	user-select: none;
	&:hover {
		background-color: ${(props) => props.theme.actions.hover};
	}
`;

const UnitControlInnerContainer = styled.div<{ square?: boolean }>`
	position: relative;
	width: fit-content;
	border: 1px solid;
	border-radius: ${(props) => {
		if (props.square) {
			return 0;
		}
		if (props.theme.shape.square) {
			return 0;
		}
		return props.theme.shape.borderRadius;
	}};
`;

export const UnitControl = forwardRef<HTMLDivElement, UnitControlProps>(
	(props, ref) => {
		const {
			square,
			size,
			onChange,
			onChangeValue,
			onChangeUnit,
			units,
			style,
			...rest
		} = props;
		const unitInputRef = useRef<HTMLInputElement>(null);
		const unitListRef = useRef<HTMLUListElement>(null);
		const [showUnitList, setShowUnitList] = useState(false);
		const [unitInputValue, setUnitInputValue] = useState(units[0]);
		const [value, setValue] = useState<number>(0);

		const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
			const _value = +e.target.value;
			setValue(_value);
		};

		const handleOnSelectUnit = (unit: string) => () => {
			setUnitInputValue(unit);
			setShowUnitList(false);
		};

		useLayoutEffect(() => {
			const listElement = unitListRef.current;
			const listWidth = listElement?.clientWidth;
			const unitInputElement = unitInputRef?.current;
			const unitInputHeight = unitInputElement?.scrollHeight;
			if (unitInputElement && listWidth && unitInputHeight) {
				unitInputElement.style.maxWidth = listWidth + 1 + "px";
				listElement.style.top = unitInputHeight + 2 + "px";
			}
		}, []);

		useEffect(() => {
			if (onChangeValue) {
				onChangeValue(value);
			}
		}, [value]);
		useEffect(() => {
			if (onChange) {
				onChange(value + unitInputValue);
			}
		}, [value, unitInputValue]);
		useEffect(() => {
			if (onChangeUnit) {
				onChangeUnit(unitInputValue);
			}
		}, [unitInputValue]);
		return (
			<Root ref={ref} {...rest} style={style}>
				<label>Label</label>
				<UnitControlInnerContainer square={square}>
					<Input
						square={square}
						sss={size ? size : "small"}
						inputMode="numeric"
						type="number"
						onChange={handleOnChange}
						value={value}
					/>
					<UnitSelect role="select">
						<UnitInput
							square={square}
							ref={unitInputRef}
							type="text"
							onClick={() => setShowUnitList((prev) => !prev)}
							value={unitInputValue}
							readOnly
						/>
						<UnitOptionList
							ref={unitListRef}
							style={{
								visibility: showUnitList ? "visible" : "hidden",
							}}
						>
							{units.map((unit, index) => (
								<UnitOption
									key={index}
									onClick={handleOnSelectUnit(unit)}
								>
									{unit}
								</UnitOption>
							))}
						</UnitOptionList>
					</UnitSelect>
				</UnitControlInnerContainer>
			</Root>
		);
	}
);

export default UnitControl;
