'use client';
import { DeviceContext } from '@utils/context/deviceContext/deviceContext';
import type { DeviceProviderProps } from './types';

export const DeviceProvider = ({ children, deviceType }: DeviceProviderProps) => {
	return <DeviceContext.Provider value={deviceType}>{children}</DeviceContext.Provider>;
};
