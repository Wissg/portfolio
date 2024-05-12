'use client';

import React from 'react';
import { projectsData } from '@/config/projects';
import Project from '../project';
import SectionHeading from '@/components/commons/section-heading';

export default function Projects() {
	return (
		<section id="projects" className="">
			<SectionHeading>Projects</SectionHeading>
			<div className="flex justify-center flex-wrap">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
