'use client';

import React from 'react';
import SectionHeading from '@/components/commons/section-heading';
import { useTranslations } from 'next-intl';

export default function About() {
	const t = useTranslations('About');
	const paragraphs: string[] = t.raw('paragraphs');
	return (
		<section
			id="about"
			className="mb-12 md:mb-20 lg:mb-32 max-w-4xl mx-auto text-center leading-8 scroll-mt-12">
			<SectionHeading>{t('title')}</SectionHeading>
			{paragraphs.map((paragraph: string, index: number) => (
				<p key={index} className="mb-3">
					{paragraph}
				</p>
			))}
		</section>
	);
}
