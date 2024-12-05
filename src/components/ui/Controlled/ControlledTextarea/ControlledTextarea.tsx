import { useController, useFormContext } from 'react-hook-form';
import type { ControlledTextareaProps } from './types';
import { Textarea } from '../../Textarea';
import classNames from 'classnames';
import classes from './ControlledTextarea.module.scss';

export const ControlledTextarea = ({
	className,
	name: fieldName,
	label,
	placeholder,
	rows,
}: ControlledTextareaProps) => {
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
			<div className={classes.textareaWrapper}>
				<span className={classes.text}>{label}</span>
				<Textarea
					onBlur={field.onBlur}
					rows={rows}
					onChange={field.onChange}
					value={field.value}
					name={field.name}
					placeholder={placeholder}
				/>
			</div>
			{error && <p className={classes.textError}>{error.message}</p>}
		</div>
	);
};
