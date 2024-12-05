import { $api } from '@api/config';
import type { Feedback } from './types';

export const sendFeedback = async (feedback: Feedback) => {
	return await $api.post('/api/v1/feedbacks', feedback);
};
