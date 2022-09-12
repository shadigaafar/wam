import styled from "@emotion/styled";
import React, { ReactElement, HTMLAttributes } from "react";

export interface ListProps extends HTMLAttributes<HTMLDivElement> {
	items: {
		icon?: ReactElement;
		text: string;
	}[];
	onClickItem?: (
		index: number,
		e?: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => void;
	htmlComponent?: React.ElementType<any> | undefined;
	border?: boolean;
	square?: boolean;
}

const StyledList = styled.ul<{ border: boolean; square: boolean }>`
	border: ${(props) =>
		props.border ? ` 1px solid ${props.theme.pallette.divider}` : "none"};
	border-radius: ${(props) => {
		if (props.square) {
			return 0;
		}
		if (props.theme.shape.square) {
			return 0;
		}
		return props.theme.shape.borderRadius;
	}};
	background-color: ${(props) => props.theme.pallette.background.default};
	list-style-type: none;
	margin: 0;
	padding: 0;
`;
const Item = styled.li`
	margin: 0;
	padding: 0;
`;

const Button = styled.button`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	background: none;
	border: none;
	padding: 8px;
	height: 45px;
	gap: ${(props) => props.theme.spacing(1.5)};
	font-size: ${(props) => props.theme.typography.body1.fontSize};
	svg {
		font-size: 1.3rem;
	}
`;
export const List = ({
	items,
	onClickItem,
	htmlComponent,
	border = false,
	square = true,
}: ListProps) => {
	const handleClickItem =
		(index: number) =>
		(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
			if (onClickItem) onClickItem(index, e);
		};

	const Root = htmlComponent
		? htmlComponent
		: ("div" as React.ElementType<any>);
	return (
		<Root>
			<StyledList border={border} square={square}>
				{items.map((item, index) => (
					<Item key={index}>
						<Button onClick={handleClickItem(index)}>
							{item.icon}
							{item.text}
						</Button>
					</Item>
				))}
			</StyledList>
		</Root>
	);
};

export default List;
