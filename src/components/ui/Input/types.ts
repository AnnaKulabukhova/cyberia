import type { FocusEventHandler } from 'react';

export interface InputProps {
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	value: string | number;
	name: string;
	placeholder?: string;
	type?: string;
	onBlur?: FocusEventHandler<HTMLInputElement>;
}
