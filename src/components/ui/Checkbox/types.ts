import type { FocusEventHandler } from 'react';

export interface CheckboxProps {
	label?: string;
	name: string;
	checked?: boolean;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}
