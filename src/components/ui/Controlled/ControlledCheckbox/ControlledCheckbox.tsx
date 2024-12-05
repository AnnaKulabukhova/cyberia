import { useController, useFormContext } from 'react-hook-form';
import { Checkbox } from '../../Checkbox';
import type { ControlledCheckboxProps } from './types';
import classes from './ControlledCheckbox.module.scss';

export const ControlledCheckbox = ({ name: fieldName, label, className }: ControlledCheckboxProps) => {
	const { control } = useFormContext();
	const {
		field: { onChange, name, value, onBlur },
		fieldState: { error },
	} = useController({ name: fieldName, control });

	return (
		<div className={className}>
			<Checkbox
				onBlur={onBlur}
				label={label}
				name={name}
				onChange={onChange}
				checked={value}
			/>
			{error && <p className={classes.textError}>{error.message}</p>}
		</div>
	);
};
