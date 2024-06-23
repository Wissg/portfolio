'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../commons/section-heading';
import { skillsData } from '@/config/skills';

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},

	hover: {
		scale: 1.1,
		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};

export default function Skills() {
	return (
		<section
			id="skills"
			className="mb-12 md:mb-20 lg:mb-32 mx-auto text-center leading-8 scroll-mt-28">
			<SectionHeading>My skills</SectionHeading>
			{skillsData.map((category, index) => (
				<div key={index} className="mb-12">
					<h3 className="text-2xl font-semibold mb-6 text-gray-700">
						{category.category}
					</h3>
					<motion.ul
						className="flex flex-wrap justify-center gap-4 text-l"
						initial="initial"
						whileInView="animate"
						viewport={{ once: true }}
						transition={{ staggerChildren: 0.1 }}>
						{category.skills.map((skill, index) => (
							<motion.li
								className="bg-gray-100 max-w-[25rem] border border-black/5 rounded-xl px-5 py-3 shadow-lg transform transition duration-300  hover:bg-gray-200 dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
								key={index}
								variants={fadeInAnimationVariants}
								custom={index}
								whileHover="hover">
								<div className="font-bold">{skill.name}</div>
							</motion.li>
						))}
					</motion.ul>
				</div>
			))}
		</section>
	);
}
