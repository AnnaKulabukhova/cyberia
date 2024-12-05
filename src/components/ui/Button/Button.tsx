import type { ButtonProps } from './types';
import classNames from 'classnames';
import classes from './Button.module.scss';

export const Button = ({ className, children, variant = 'filled', onClick, disabled }: ButtonProps) => {
	const containerClassName = classNames(classes.button, classes[variant], className, { [classes.disabled]: disabled });
	return (
		<button
			disabled={disabled}
			onClick={onClick}
			className={containerClassName}>
			{children}
		</button>
	);
};
