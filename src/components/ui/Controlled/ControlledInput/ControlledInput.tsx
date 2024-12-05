import { useController, useFormContext } from 'react-hook-form';
import type { ControlledInputProps } from './types';
import { Input } from '../../Input';
import classNames from 'classnames';
import classes from './ControlledInput.module.scss';

export const ControlledInput = ({
	className,
	name: fieldName,
	label,
	placeholder,
	type = 'text',
}: ControlledInputProps) => {
	const containerClassname = classNames(className, classes.wrapper);
	const { control } = useFormContext();

	const {
		field,
		fieldState: { error },
	} = useController({
		name: fieldName,
		control,
	});

	return (
		<div className={containerClassname}>
			<label className={classes.inputWrapper}>
				<Input
					onBlur={field.onBlur}
					onChange={field.onChange}
					value={field.value}
					name={field.name}
					type={type}
					placeholder={placeholder}
				/>
				<span className={classes.text}>{label}</span>
			</label>

			{error && <p className={classes.textError}>{error.message}</p>}
		</div>
	);
};
