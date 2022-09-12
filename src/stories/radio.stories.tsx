import Radio from "../components/radio";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Radio",
	component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => (
	<>
		<Radio {...args} /> <Radio {...args} /> <Radio {...args} />
	</>
);

export const Primary = Template.bind({});

Primary.args = {
	name: "primary",
};
