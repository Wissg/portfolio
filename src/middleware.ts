import { getLogger } from '@/utils/logUtils';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const correlationId = crypto.randomUUID();
	request.headers.set('x-correlation-id', correlationId);
	const logger = getLogger('request').child({ correlationId });

	// Log all request headers and important information
	if (!request.url.match('_next')) {
		logger.debug('Received request', {
			method: request.method,
			url: request.url,
			headers: Object.fromEntries(request.headers.entries()),
		});
	}
}
