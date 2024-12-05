import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'api.test.cyberia.studio',
				port: '',
				pathname: '/storage/**',
			},
		],
	},
};

export default nextConfig;
