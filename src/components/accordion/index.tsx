import styled from "@emotion/styled";
import React, {
	forwardRef,
	HTMLAttributes,
	useLayoutEffect,
	useRef,
	useState,
} from "react";
import ExpandIcon from "./icon";

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
	title: string;
	content: string;
	titleTagName?: React.ElementType<any>;
	expandIconColor?: string;
	square?: boolean;
	withBorder?: boolean;
}

const AccordionContainer = styled.div<{
	square?: boolean;
	withBorder?: boolean;
}>`
	position: relative;
	border: ${(props) =>
		props.withBorder
			? `1px solid ${props.theme.pallette.divider}`
			: "none"};
	background-color: ${(props) => props.theme.pallette.background.paper};
	&:not(:first-of-type) {
		border-top: none;
	}
	&:not(:last-of-type):not(:only-of-type) {
		border-bottom: none;
	}
	&:first-of-type {
		border-top-left-radius: ${(props) => {
			if (!props.square) {
				return props.theme.shape.borderRadius;
			} else {
				return 0;
			}
		}};
		border-top-right-radius: ${(props) => {
			if (!props.square) {
				return props.theme.shape.borderRadius;
			} else {
				return 0;
			}
		}};
	}
	&:last-of-type {
		border-bottom-left-radius: ${(props) => {
			if (!props.square) {
				return props.theme.shape.borderRadius;
			} else {
				return 0;
			}
		}};
		border-bottom-right-radius: ${(props) => {
			if (!props.square) {
				return props.theme.shape.borderRadius;
			} else {
				return 0;
			}
		}};
	}
	&:not(:last-of-type):not(:only-of-type) {
		&:after {
			position: absolute;
			left: 0px;
			bottom: 0px;
			right: 0px;
			height: 1px;
			content: "";
			opacity: 1;
			background-color: rgba(28, 27, 27, 0.12);
			transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
				background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
		}
	}
`;
const HeaderContainer = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: ${(props) => props.theme.spacing(1.5)};
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.actions.hover};
	}
	user-select: none;
`;

const ContentContainer = styled.div`
	overflow: hidden;
	transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
	transition-duration: 222ms;
`;

const Content = styled.p`
	padding: ${(props) => props.theme.spacing(1.5)};
	margin: 0px;
`;

const TitleTagName = styled.p`
	margin: 0px;
	padding: 0px;
	line-height: 0;
`;
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
	(props, ref) => {
		const contentContainerRef = useRef<HTMLDivElement>(null);
		const {
			title,
			content,
			titleTagName,
			square,
			expandIconColor,
			withBorder,
			...rest
		} = props;
		const [collapse, setCollapse] = useState<boolean>(false);

		const handleToggleCollapse = () => {
			setCollapse((prev) => !prev);
		};

		useLayoutEffect(() => {
			const scrollHeight = contentContainerRef.current?.scrollHeight;
			if (contentContainerRef.current && collapse) {
				contentContainerRef.current.style.height = scrollHeight + "px";
			} else if (contentContainerRef.current) {
				contentContainerRef.current.style.height = 0 + "px";
			}
		}, [collapse]);

		return (
			<AccordionContainer
				className="wam-accordion"
				square={square}
				withBorder={withBorder !== undefined ? withBorder : true}
				ref={ref}
				{...rest}
			>
				<HeaderContainer
					onClick={handleToggleCollapse}
					className="wam-accordion__header-container"
				>
					<TitleTagName as={titleTagName}>{title}</TitleTagName>
					<ExpandIcon upward={collapse} color={expandIconColor} />
				</HeaderContainer>
				<ContentContainer
					ref={contentContainerRef}
					className="wam-accordion__content-container"
				>
					<Content>{content}</Content>
				</ContentContainer>
			</AccordionContainer>
		);
	}
);

export default Accordion;
