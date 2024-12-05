import * as yup from 'yup';
import { FieldFeedbackForm } from '../types/FieldFeedbackForm';
import { feedbackFormSchemaMobile } from './feedbackFormSchemaMobile';

export const feedbackFormSchemaDesktop = feedbackFormSchemaMobile.concat(
	yup.object().shape({
		[FieldFeedbackForm.Agreement]: yup
			.boolean()
			.required('Поле обязательное для заполнения')
			.oneOf([true], 'Поле обязательное для заполнения'),
	}),
);
