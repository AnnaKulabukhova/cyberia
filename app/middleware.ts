import { NextResponse, userAgent } from 'next/server';
import { DeviceType } from '@appTypes/deviceType';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
	const ua = userAgent(request);
	const deviceType = ua.device?.type === DeviceType.Desktop ? DeviceType.Desktop : DeviceType.Mobile;

	const response = NextResponse.next();
	response.cookies.set('deviceType', deviceType);
	return response;
}
export const config = {
	matcher: '/:path*',
};
