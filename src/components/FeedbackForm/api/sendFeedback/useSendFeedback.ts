import { AxiosError } from 'axios';
import type { FeedbackTypeDesktop } from '@components/FeedbackForm/model/types/FieldFeedbackForm';
import type { UseFormSetError } from 'react-hook-form';
import { sendFeedback } from './sendFeedback';
import { useMutation } from '@tanstack/react-query';

export function useSendFeedback(setError: UseFormSetError<FeedbackTypeDesktop>) {
	const { mutate, isPending, isError, isSuccess, error } = useMutation({
		mutationKey: ['send feedback'],
		mutationFn: sendFeedback,
		onError: (error) => {
			if (error instanceof AxiosError && error.response?.data?.errors) {
				const response = error.response.data.errors;

				Object.entries(response).forEach(([field, messages]) => {
					const errorMessage = Array.isArray(messages) ? messages.join(', ') : messages;

					if (typeof errorMessage === 'string' || errorMessage === undefined) {
						setError(field as keyof FeedbackTypeDesktop, {
							type: 'manual',
							message: errorMessage,
						});

					}
				});
			}
		},
	});
	return { mutate, isPending, isError, isSuccess, error };
}
