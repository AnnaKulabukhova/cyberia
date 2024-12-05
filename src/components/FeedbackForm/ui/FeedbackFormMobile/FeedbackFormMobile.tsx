'use client';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@components/ui/Button';
import { ControlledInput } from '@components/ui/Controlled/ControlledInput';
import { ControlledTextarea } from '@components/ui/Controlled/ControlledTextarea';
import type { FeedbackFormProps } from '../../model/types/FieldFeedbackForm';
import { FieldFeedbackForm } from '../../model/types/FieldFeedbackForm';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './FeedbackFormMobile.module.scss';
import { defaultValueFeedBackFormMobile } from '../../model/constants/defaultValueFeedBackForm';
import { feedbackFormSchemaMobile as schema } from '../../model/validationSchema/feedbackFormSchemaMobile';
import { useSendFeedback } from '../../api/sendFeedback/useSendFeedback';
import { yupResolver } from '@hookform/resolvers/yup';

export const FeedbackFormMobile = ({ className }: FeedbackFormProps) => {
	const containerClassName = classNames(className, classes.feedbackFormMobile);
	const methods = useForm({
		defaultValues: defaultValueFeedBackFormMobile,
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
			<div className={classes.headerForm}>
				<Image
					src={'/icons/formIcon.svg'}
					width={76}
					height={70}
					alt='Иконка формы'
				/>
				<h2 className={classes.title}>
					Расскажите <br /> о вашем проекте:
				</h2>
			</div>

			<FormProvider {...methods}>
				<form onSubmit={onSubmit}>
					<div className={classes.form}>
						<ControlledInput
							placeholder={'Ваше имя*'}
							label='Ваше имя*'
							name={FieldFeedbackForm.Name}
						/>
						<ControlledInput
							placeholder={'Email*'}
							label='Email*'
							name={FieldFeedbackForm.Email}
						/>
						<ControlledInput
							placeholder={'Телефон*'}
							label='Телефон*'
							name={FieldFeedbackForm.Phone}
						/>
						<ControlledTextarea
							placeholder={'Сообщение*'}
							className={classes.textarea}
							rows={5}
							label='Сообщение*'
							name={FieldFeedbackForm.Message}
						/>
					</div>
					<Button
						disabled={isPending}
						className={classes.button}>
						Отправить
					</Button>
					<p className={classes.agreement}>
						Нажимая “Отправить”, Вы даете согласие <br /> на обработку персональных данных
					</p>
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
