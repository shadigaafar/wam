import Typography from "../components/typography";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Typography",
	component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
	<>
		<Typography {...args}>How are you?</Typography>
	</>
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const PrimarySmall = Template.bind({});
Primary.args = {
	variant: "inherit",
	textPriority: "primary",
};

Secondary.args = {
	variant: "h1",
};
PrimarySmall.args = {
	htmlComponent: "small",
};
