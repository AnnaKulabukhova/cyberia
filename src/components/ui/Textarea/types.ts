import type { FocusEventHandler } from 'react';

export interface TextareaProps {
	onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	value: string | number;
	name: string;
	placeholder?: string;
	rows: number;
	onBlur?: FocusEventHandler<HTMLTextAreaElement>;
}
