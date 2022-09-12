import UnitControl from "../components/unit-control";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "UnitControl",
	component: UnitControl,
} as ComponentMeta<typeof UnitControl>;

const units = ["rem", "px", "em", "%"];
const Template: ComponentStory<typeof UnitControl> = (args) => (
	<UnitControl {...args} units={units}></UnitControl>
);

export const Primary = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});
Primary.args = {};
Medium.args = {
	size: "medium",
};
Large.args = {
	size: "large",
};
