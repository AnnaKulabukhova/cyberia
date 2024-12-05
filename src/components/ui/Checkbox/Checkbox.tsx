import type { CheckboxProps } from './types';
import classes from './Checkbox.module.scss';

export const Checkbox = ({ name, label, onChange, checked, onBlur }: CheckboxProps) => {
	return (
		<label className={classes.label}>
			<input
				onBlur={onBlur}
				name={name}
				type='checkbox'
				onChange={onChange}
				checked={checked}
				className={classes.input}
			/>
			<div className={classes.buttonContainer}></div>
			<span className={classes.labelText}>
				<span className={classes.labelText}>{label}</span>
			</span>
		</label>
	);
};
