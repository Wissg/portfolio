import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSectionSkeleton = () => {
	return (
		<section className="py-16">
			<div className="flex flex-col lg:flex-row">
				<div className="w-full lg:w-1/2 place-self-center text-center lg:text-left">
					<Skeleton className="h-12 w-full mb-4 lg:mb-8" />
					<Skeleton className="h-48 lg:h-64 w-full" />
				</div>
				<div className="w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0 p-5">
					<div className="max-w-lg w-full rounded-full overflow-hidden">
						<div className="relative overflow-hidden">
							<Skeleton className="h-80 w-full rounded-full" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSectionSkeleton;
