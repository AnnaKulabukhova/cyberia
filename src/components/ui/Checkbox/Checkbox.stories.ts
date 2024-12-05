import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
	title: 'ui/Checkbox',
	component: Checkbox,
	parameters: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {
	args: {
		name: 'Name',
		label: 'Отметьте вариант',
		checked: false,
	},
};

export const Checked: Story = {
	args: {
		name: 'Name',
		label: 'Отметьте вариант',
		checked: true,
	},
};
