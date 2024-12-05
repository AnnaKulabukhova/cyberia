import type { InputProps } from './types';
import classes from './Input.module.scss';

export const Input = ({ name, placeholder, value, onChange, type = 'text', onBlur }: InputProps) => {
	return (
		<input
			onBlur={onBlur}
			className={classes.input}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			name={name}
			type={type}
		/>
	);
};
