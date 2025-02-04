'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export const QueryProvider = ({ children }: { children: ReactNode }) => {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
