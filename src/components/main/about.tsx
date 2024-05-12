'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/commons/section-heading';
import { about } from '@/config/about';

export default function About() {
	return (
		<section
			id="about"
			className="mb-12 md:mb-20 lg:mb-32 max-w-4xl mx-auto text-center leading-8 scroll-mt-12">
			<SectionHeading>About me</SectionHeading>
			{about.paragraphs.map((paragraph, index) => (
				<p key={index} className="mb-3">
					{paragraph}
				</p>
			))}
		</section>
	);
}
