import { DeviceType } from '@appTypes/deviceType';
import { cookies } from 'next/headers';

export const getDeviceType = async () => {
	const cookiesStore = await cookies();
	const deviceType = cookiesStore.get('deviceType')?.value || DeviceType.Desktop;
	return deviceType;
};
