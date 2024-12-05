import * as yup from 'yup';
import { FieldFeedbackForm } from '../types/FieldFeedbackForm';

export const feedbackFormSchemaMobile = yup.object().shape({
	[FieldFeedbackForm.Name]: yup
		.string()
		.min(1, 'Минимальная длина 3 символа')
		.max(15, 'Максимальная длина 15 символов')
		.matches(
			/^[A-Za-zА-Яа-яЁё](?:[A-Za-zА-Яа-яЁё\-_]*[A-Za-zА-Яа-яЁё])?$/,
			'Имя должно содержать только буквы русского или английского алфавита',
		)
		.required('Поле обязательное для заполнения'),

	[FieldFeedbackForm.Email]: yup
		.string()
		.email('Некорректный адрес электронной почты')
		.required('Поле обязательное для заполнения'),

	[FieldFeedbackForm.Phone]: yup
		.string()
		.required('Поле обязательное для заполнения')
		.matches(/^(7|8)\d{10}$/, 'Введен некорректный номер телефона'),

	[FieldFeedbackForm.Message]: yup
		.string()
		.min(10, 'Минимальная длина текста 10 знаков')
		.max(250, 'Текст не должен превышать 200 знаков')
		.required('Поле обязательное для заполнения'),
});
