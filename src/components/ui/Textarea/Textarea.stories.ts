import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
	title: 'ui/Textarea',
	component: Textarea,
	parameters: {},
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithText: Story = {
	args: {
		name: 'Name',
		rows: 5,
		value: 'Value',
	},
};
export const Empty: Story = {
	args: {
		name: 'Name',
		rows: 5,
		placeholder: 'Введите текст',
		value: '',
	},
};

export const Small: Story = {
	args: {
		name: 'Name',
		rows: 2,
		placeholder: 'Введите текст',
		value: '',
	},
};
export const Big: Story = {
	args: {
		name: 'Name',
		rows: 9,
		placeholder: 'Введите текст',
		value: '',
	},
};
