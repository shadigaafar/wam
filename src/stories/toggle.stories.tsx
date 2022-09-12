import Toggle from "../components/toggle";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Toggle",
	component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => (
	<>
		<Toggle {...args} />
	</>
);

export const Primary = Template.bind({});
export const Small = Template.bind({});
Primary.args = {
	name: "primary",
};

Small.args = {
	toggleSize: "small",
};
