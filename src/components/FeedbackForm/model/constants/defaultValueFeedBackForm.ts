import type { FeedbackTypeDesktop, FeedbackTypeMobile } from '../types/FieldFeedbackForm';
import { FieldFeedbackForm } from '../types/FieldFeedbackForm';

export const defaultValueFeedBackFormDesktop: FeedbackTypeDesktop = {
	[FieldFeedbackForm.Name]: '',
	[FieldFeedbackForm.Email]: '',
	[FieldFeedbackForm.Phone]: '',
	[FieldFeedbackForm.Message]: '',
	[FieldFeedbackForm.Agreement]: true,
};

export const defaultValueFeedBackFormMobile: FeedbackTypeMobile = {
	[FieldFeedbackForm.Name]: '',
	[FieldFeedbackForm.Email]: '',
	[FieldFeedbackForm.Phone]: '',
	[FieldFeedbackForm.Message]: '',
};
