import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
const meta = {
	title: 'ui/Button',
	component: Button,
	parameters: {},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
	args: {
		children: 'Button',
		variant: 'filled',
	},
};

export const Clear: Story = {
	args: {
		children: 'Button',
		variant: 'clear',
	},
};

export const Disabled: Story = {
	args: {
		children: 'Button',
		disabled: true,
	},
};
