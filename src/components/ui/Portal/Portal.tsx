import type { PortalProps } from './types';
import { createPortal } from 'react-dom';

export const Portal = ({ children, domNode = document.body }: PortalProps) => {
	return createPortal(children, domNode);
};
