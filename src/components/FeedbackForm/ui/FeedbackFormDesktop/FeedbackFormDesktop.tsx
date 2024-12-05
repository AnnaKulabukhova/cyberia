'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@components/ui/Button';
import { ControlledCheckbox } from '@components/ui/Controlled/ControlledCheckbox';
import { ControlledInput } from '@components/ui/Controlled/ControlledInput';
import { ControlledTextarea } from '@components/ui/Controlled/ControlledTextarea';
import type { FeedbackFormProps } from '../../model/types/FieldFeedbackForm';
import { FieldFeedbackForm } from '../../model/types/FieldFeedbackForm';
import classNames from 'classnames';
import classes from './FeedbackFormDesktop.module.scss';
import { defaultValueFeedBackFormDesktop } from '../../model/constants/defaultValueFeedBackForm';
import { feedbackFormSchemaDesktop as schema } from '../../model/validationSchema/feedbackFormSchemaDesktop';
import { useSendFeedback } from '../../api/sendFeedback/useSendFeedback';
import { yupResolver } from '@hookform/resolvers/yup';

export const FeedbackFormDesktop = ({ className }: FeedbackFormProps) => {
	const containerClassName = classNames(className, classes.feedbackFormDesktop);
	const methods = useForm({
		mode: 'onTouched',
		defaultValues: defaultValueFeedBackFormDesktop,
		resolver: yupResolver(schema),
	});

	const { handleSubmit, setError } = methods;
	const { mutate, isPending, isSuccess } = useSendFeedback(setError);

	const onSubmit = handleSubmit((data) => {
		const newData = { phone: data.phone, email: data.email, message: data.message };
		mutate(newData);
	});

	return (
		<div className={containerClassName}>
			<h1 className={classes.title}>
				Расскажите <br />о вашем проекте:
			</h1>
			<FormProvider {...methods}>
				<form onSubmit={onSubmit}>
					<div className={classes.inputContainer}>
						<ControlledInput
							label='Ваше имя*'
							name={FieldFeedbackForm.Name}
						/>
						<ControlledInput
							label='Email*'
							name={FieldFeedbackForm.Email}
						/>
						<ControlledInput
							label='Телефон*'
							name={FieldFeedbackForm.Phone}
						/>
					</div>
					<ControlledTextarea
						className={classes.textarea}
						rows={5}
						label='Сообщение*'
						name={FieldFeedbackForm.Message}
					/>
					<ControlledCheckbox
						label='Согласие на обработку персональных данных'
						className={classes.checkbox}
						name={FieldFeedbackForm.Agreement}
					/>
					<div className={classes.button}>
						<Button disabled={isPending}>Обсудить проект</Button>
					</div>
					{isSuccess && (
						<div className={classes.wrapper}>
							<h3>Сообщение успешно отправлено!</h3>
						</div>
					)}
				</form>
			</FormProvider>
		</div>
	);
};
