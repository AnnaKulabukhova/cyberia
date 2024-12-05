export enum FieldFeedbackForm {
	Name = 'name',
	Email = 'email',
	Phone = 'phone',
	Message = 'message',
	Agreement = 'agreement',
}

export interface FeedbackTypeMobile {
	[FieldFeedbackForm.Email]: string;
	[FieldFeedbackForm.Message]: string;
	[FieldFeedbackForm.Phone]: string;
	[FieldFeedbackForm.Name]: string;
}

export interface FeedbackTypeDesktop extends FeedbackTypeMobile {
	[FieldFeedbackForm.Agreement]: boolean;
}

export interface FeedbackFormProps {
	className?: string;
}
