import React from 'react';

import {
	Timeline,
	TimelineContent,
	TimelineDot,
	TimelineHeading,
	TimelineItem,
	TimelineLine,
} from '@/components/ui/timeline';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card';

import SectionHeading from '../commons/section-heading';
import { experiencesData } from '@/config/experiences';
import Link from 'next/link';
import { CalendarIcon } from 'lucide-react';

export default function Experiences() {
	return (
		<section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
			<SectionHeading>Work Experience</SectionHeading>
			<Timeline positions="center">
				{experiencesData.map((item, index) => (
					<TimelineItem key={index} status="done">
						<TimelineHeading side={index % 2 === 0 ? 'left' : 'right'}>
							{item.title}
						</TimelineHeading>
						<TimelineDot status={item.status} />
						<TimelineLine done />
						<TimelineContent side={index % 2 === 0 ? 'left' : 'right'}>
							<span className="block text-sm text-gray-600 mb-2">
								{item.dateBegin} {item.dateEnd && ' - ' + item.dateEnd}
							</span>
							<span className="block text-base text-gray-800">
								{item.description}
							</span>
						</TimelineContent>

						<TimelineContent
							side={index % 2 === 1 ? 'left' : 'right'}
							className="h-full">
							<div className="flex justify-center items-center h-full">
								<HoverCard>
									<HoverCardTrigger asChild>
										<Button variant="link">{item.company.name}</Button>
									</HoverCardTrigger>
									<HoverCardContent className="w-80 text-left">
										<div className="flex justify-between space-x-4">
											<Avatar>
												<AvatarImage src={item.company.link + '/favicon.ico'} />
												<AvatarFallback>
													{item.company.name.charAt(0)}
												</AvatarFallback>
											</Avatar>
											<div className="space-y-1">
												<h4 className="text-sm font-semibold">
													<Button variant="link" asChild>
														<Link href={item.company.link + ''} target="_blank">
															{item.company.name}
														</Link>
													</Button>
												</h4>
												<p className="text-sm">
													{item.company.description
														? item.company.description
														: 'The React Framework – created and maintained by @vercel.'}
												</p>{' '}
												<div className="flex items-center pt-2">
													<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{' '}
													<span className="text-xs text-muted-foreground">
														Joined {item.dateBegin}
													</span>
												</div>
											</div>
										</div>
									</HoverCardContent>
								</HoverCard>
							</div>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</section>
	);
}
