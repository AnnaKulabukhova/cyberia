import { DeviceContext } from './deviceContext';
import { DeviceType } from '@appTypes/deviceType';
import { useContext } from 'react';

export const useDevice = () => {
	const deviceType = useContext(DeviceContext);
	const isMobile = deviceType === DeviceType.Mobile;
	const isDesktop = deviceType === DeviceType.Desktop;
	return { deviceType, isDesktop, isMobile };
};
