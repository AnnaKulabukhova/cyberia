import type { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
	className?: string;
	variant?: 'filled' | 'clear';
	onClick?: () => void;
	disabled?: boolean;
}
