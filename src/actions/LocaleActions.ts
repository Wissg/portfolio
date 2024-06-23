'use server';

import { cookies } from 'next/headers';
import { localeCookieKey } from '@/config/locale';
import { deleteCookie, setCookie } from 'cookies-next';
import { getLogger } from '@/utils/logUtils';
import { revalidatePath } from 'next/cache';

export async function deleteLocale(previousState: any) {
	// Set logger
	const logger = getLogger('deleteLocale');
	try {
		deleteCookie(localeCookieKey, { cookies });
		logger.info('Locale cookie deleted successfully');
	} catch (e) {
		logger.error('Failed to delete locale cookie', e);
		return 'Failed to delete locale cookie';
	}
}

export async function addLocale(previousState: any, locale: string) {
	// Set logger
	const logger = getLogger('addLocale');
	try {
		setCookie(localeCookieKey, locale, { cookies });
		logger.info(`Locale cookie set to: ${locale}`);
	} catch (e) {
		logger.error('Failed to set locale cookie', e);
		return 'Failed to set locale cookie';
	}
}
