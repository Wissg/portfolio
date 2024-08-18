import "@/styles/globals.css";
import type { Metadata } from "next";
import type { Viewport } from "next";

import { appConfig } from "@/config/app";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/header/home-header";
import { ThemeProvider } from "@/provider/theme-provider";
import { NextUIProvider } from '@nextui-org/system';
import { NextIntlClientProvider } from 'next-intl';
import ActiveSectionContextProvider from '@/provider/active-section-context';
import { SiteFooter } from '@/components/footer/home-footer';
import {
	getLocale,
	getMessages,
	getNow,
	getTimeZone,
} from 'next-intl/server';
import {Toaster} from "@/components/ui/toaster";

export const metadata: Metadata = {
	title: {
		default: appConfig.name,
		template: `%s - ${appConfig.name}`,
	},
	description: appConfig.description,
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/favicon.ico',
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: 'black' },
	],
};

interface RootLayoutProps {
	children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
	// Providing all messages to the client
	const messages = await getMessages();
	const locale = await getLocale();
	const now = await getNow();
	const timeZone = await getTimeZone();

	return (
		<html lang={locale} suppressHydrationWarning>
			<head />
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<ActiveSectionContextProvider>
						<NextUIProvider>
							<NextIntlClientProvider
								messages={messages}
								timeZone={timeZone}
								now={now}
								locale={locale}>
								<div className="relative flex min-h-screen flex-col">
									<SiteHeader />
									<div className="flex-1">{children}</div>
									<Toaster />
									<SiteFooter />
								</div>
							</NextIntlClientProvider>
						</NextUIProvider>
					</ActiveSectionContextProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
