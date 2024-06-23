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

import SectionHeading from '@/components/commons/section-heading';
import Link from 'next/link';
import { CalendarIcon } from 'lucide-react';
import { Education, Experience } from '@/models/professionalProfileModels';

// Define the props interface with a union type for education and experience
interface ProfessionalTimelineProps {
	professional: ReadonlyArray<Education | Experience>;
	headingSection: string;
}

// Define the ProfessionalTimeline functional component
const ProfessionalTimeline: React.FC<ProfessionalTimelineProps> = ({
	professional,
	headingSection,
}) => {
	return (
		<>
			<SectionHeading>{headingSection}</SectionHeading>
			<Timeline positions="center">
				{professional.map((item, index) => (
					<TimelineItem key={index} status={'done'}>
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
										<Button variant="link">{item.organization.name}</Button>
									</HoverCardTrigger>
									<HoverCardContent className="w-80 text-left">
										<div className="flex justify-between space-x-4">
											<Avatar>
												<AvatarImage
													src={`${item.organization.link}/favicon.ico`}
												/>
												<AvatarFallback>
													{item.organization.name.charAt(0)}
												</AvatarFallback>
											</Avatar>
											<div className="space-y-1">
												<h4 className="text-sm font-semibold">
													<Button variant="link" asChild>
														<Link
															href={item.organization.link || '#'}
															target="_blank">
															{item.organization.name}
														</Link>
													</Button>
												</h4>
												<p className="text-sm">
													{item.organization.description ||
														'No description available.'}
												</p>
												<div className="flex items-center pt-2">
													<CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
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
		</>
	);
};

export default ProfessionalTimeline;
