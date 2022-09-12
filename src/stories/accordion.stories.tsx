import Accordion from "../components/accordion";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Accordion",
	component: Accordion,
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
	<>
		<div>
			<Accordion {...args}></Accordion>
			<Accordion {...args}></Accordion>
			<Accordion {...args}></Accordion>
		</div>

		<div>
			<h1>one</h1>
			<Accordion {...args}></Accordion>
		</div>
	</>
);

export const Primary = Template.bind({});

Primary.args = {
	title: "Heading",
	content:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};
