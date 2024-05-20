'use client';

import { useRef } from 'react';
import { projectsData } from '@/config/projects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import { Card, CardHeader, CardBody, CardFooter } from '@nextui-org/card';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['0 1', '1.33 1'],
	});
	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
			className="group mb-3 sm:mb-8 last:mb-0 m-4">
			<Card className="bg-gray-100 max-w-[25rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
				<div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full">
					<CardHeader>
						<h3 className="text-2xl font-semibold">{title}</h3>
					</CardHeader>
					<CardBody>
						<ScrollShadow>
							<p className="mt-2 text-gray-700 dark:text-white/70">
								{description}
							</p>
						</ScrollShadow>
					</CardBody>
					<CardFooter>
						<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
							{tags.map((tag, index) => (
								<li
									className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
									key={index}>
									{tag}
								</li>
							))}
						</ul>
					</CardFooter>
				</div>
			</Card>
		</motion.div>
	);
}
