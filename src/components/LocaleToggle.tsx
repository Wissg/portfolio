'use client';

import React, { useState } from 'react';
import { useFormState } from 'react-dom';
import { GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLocale } from 'next-intl';
import { localeCookieKey, locales } from '@/config/locale';
import { getLogger } from '@/utils/logUtils';
import { getCookie } from 'cookies-next';
import { addLocale, deleteLocale } from '@/actions/LocaleActions';

export function LocaleToggle() {
	// Set logger
	const logger = getLogger('LocaleToggle');
	const cookieValue = getCookie(localeCookieKey);

	// State for system locale
	const [isSystemLocale, setIsSystemLocale] = useState<boolean>(!cookieValue);

	// Action state for addLocale and deleteLocale actions
	const [addLocaleError, addLocaleAction, addLocalePending] = useFormState(
		addLocale,
		null
	);
	const [deleteLocaleError, deleteLocaleAction, deleteLocalePending] =
		useFormState(deleteLocale, null);

	const activeLocale = useLocale();

	const handleLocaleChange = async (locale: string) => {
		try {
			if (locale === 'system') {
				deleteLocaleAction();
				setIsSystemLocale(true);
				logger.debug('Locale cookie deleted for system setting');
			} else {
				addLocaleAction(locale);
				setIsSystemLocale(false);
				logger.debug(`Locale cookie set to: ${locale}`);
			}
		} catch (error) {
			logger.error('Failed to update locale:', error);
		}
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" className="w-9 px-0">
					<GlobeIcon className="h-[1.2rem] w-[1.2rem]" />
					<span className="sr-only">Toggle locale</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				{locales.map((locale) => (
					<DropdownMenuItem
						key={locale}
						onClick={() => handleLocaleChange(locale)}
						disabled={!isSystemLocale && locale == activeLocale}>
						{locale.toUpperCase()}
					</DropdownMenuItem>
				))}
				<DropdownMenuItem
					onClick={() => handleLocaleChange('system')}
					disabled={isSystemLocale}>
					System
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
