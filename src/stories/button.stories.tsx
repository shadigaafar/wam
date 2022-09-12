import Button from "../components/button";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Button",
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
	<Button {...args}>Button</Button>
);

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

export const Tertiary = Template.bind({});

export const Square = Template.bind({});

Primary.args = {
	variant: "primary",
};
Secondary.args = {
	variant: "secondary",
};
Tertiary.args = {
	variant: "primary",
};

Square.args = {
	variant: "primary",
	square: true,
};
