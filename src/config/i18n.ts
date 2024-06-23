import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';
import { getCookie } from 'cookies-next';
import { getCorrelationId, getLogger } from '@/utils/logUtils';
import { defaultLocale, localeCookieKey, locales } from '@/config/locale';

export default getRequestConfig(async () => {
	// set logger
	const correlationId = getCorrelationId(headers());
	const logger = getLogger('getRequestConfig').child({ correlationId });

	// Set default locale
	let locale: string = defaultLocale;
	logger.debug(`Initial locale set to default: ${defaultLocale}`);

	// Fetch locale from headers
	const acceptLanguage = headers().get('Accept-Language');
	const simpleLocale = acceptLanguage?.split(',')[0];
	const complexLocale = acceptLanguage?.split(',')[1];
	logger.debug(`Accept-Language header: ${acceptLanguage}`);
	logger.debug(`Parsed simple locale: ${simpleLocale}`);
	logger.debug(`Parsed complex locale: ${complexLocale}`);

	// Fetch locale from cookies
	const retrievedLocale = getCookie(localeCookieKey, { cookies });
	logger.debug(`Locale from cookies: ${retrievedLocale}`);

	// Determine the locale to use
	if (retrievedLocale && locales.includes(retrievedLocale)) {
		locale = retrievedLocale;
		logger.debug(`Locale set from cookies: ${retrievedLocale}`);
	} else if (simpleLocale && locales.includes(simpleLocale)) {
		locale = simpleLocale;
		logger.debug(`Locale set from simple locale: ${simpleLocale}`);
	} else if (complexLocale && locales.includes(complexLocale)) {
		locale = complexLocale;
		logger.debug(`Locale set from complex locale: ${complexLocale}`);
	}

	// Validate that the determined locale is valid
	if (!locales.includes(locale)) {
		logger.error(`Invalid locale: ${locale}`);
		notFound();
	}

	logger.info(`locale: ${locale}`);

	return {
		locale,
		messages: (await import(`../../i18n/${locale}.json`)).default,
	};
});
