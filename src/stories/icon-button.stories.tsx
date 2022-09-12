import IconButton from "../components/icon-button";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BiAlignRight } from "react-icons/bi";
export default {
	title: "IconButton",
	component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
	<IconButton {...args}>
		<BiAlignRight />
	</IconButton>
);

export const Primary = Template.bind({});

export const Small = Template.bind({});

export const Medium = Template.bind({});
export const SquareOnHover = Template.bind({});

export const WithBackgroundAndRoundedEdges = Template.bind({});

Primary.args = {
	size: "large",
};
Small.args = {
	size: "small",
};

Medium.args = {
	size: "medium",
};

SquareOnHover.args = {
	size: "medium",
	shape: "square",
	color: "success",
};
WithBackgroundAndRoundedEdges.args = {
	size: "medium",
	shape: "rounded",
	background: true,
};
