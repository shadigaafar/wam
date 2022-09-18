import List from "../components/list";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineInbox } from "react-icons/ai";
export default {
	title: "List",
	component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Primary = Template.bind({});

const items = [
	{
		onClickItem: () => {
			console.log("clicked");
		},
		icon: <AiOutlineSend></AiOutlineSend>,
		text: "Item 1",
	},
	{
		icon: <AiOutlineMail />,
		text: "Item 2",
	},
	{
		icon: <AiOutlineInbox />,
		text: "Item 3",
	},
	{
		text: "Item 4",
	},
];
Primary.args = {
	items: items,
};
