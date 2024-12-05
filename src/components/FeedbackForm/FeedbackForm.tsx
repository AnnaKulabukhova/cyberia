import { FeedbackFormDesktop } from './ui/FeedbackFormDesktop/FeedbackFormDesktop';
import { FeedbackFormMobile } from './ui/FeedbackFormMobile/FeedbackFormMobile';
import { useDevice } from '@utils/context/deviceContext/useDevice';

export const FeedbackForm = () => {
	const { isDesktop } = useDevice();

	return isDesktop ? <FeedbackFormDesktop /> : <FeedbackFormMobile />;
};
