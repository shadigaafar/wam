import { useTheme } from "@emotion/react";

type Props = {
	upward?: boolean;
	color?: string;
};
const ExpandIcon = ({ upward, color }: Props) => {
	const theme = useTheme();
	return (
		<svg
			focusable="false"
			aria-hidden="true"
			viewBox="0 0 24 24"
			data-testid="ExpandMoreIcon"
			width="20px"
			style={{
				transform: upward ? "rotate(180deg)" : "unset",
			}}
		>
			<path
				fill={color ? color : theme.pallette.text.primary}
				d="M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
			></path>
		</svg>
	);
};

export default ExpandIcon;
