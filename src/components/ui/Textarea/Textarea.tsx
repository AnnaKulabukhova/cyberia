import type { TextareaProps } from './types';
import classes from './Textarea.module.scss';

export const Textarea = ({ name, placeholder, value, onChange, rows, onBlur }: TextareaProps) => {
	return (
		<textarea
			onBlur={onBlur}
			className={classes.textarea}
			onChange={onChange}
			value={value}
			placeholder={placeholder}
			name={name}
			rows={rows}
		/>
	);
};
