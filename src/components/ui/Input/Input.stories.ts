import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
	title: 'ui/Input',
	component: Input,
	parameters: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithText: Story = {
	args: {
		name: 'Name',
		value: 'Value',
	},
};

export const Empty: Story = {
	args: {
		name: 'Name',
		placeholder: 'Введите текст',
		value: '',
	},
};
