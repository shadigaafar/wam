import AppBar from "../components/appBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "AppBar",
	component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => (
	<>
		<AppBar {...args}></AppBar>
	</>
);

export const Primary = Template.bind({});

Primary.args = {
	position: "static",
};
