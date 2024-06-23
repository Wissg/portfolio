import { experiencesData } from '@/config/experiences';
import ProfessionalTimeline from '../professionalTimeline';

export default function Experiences() {
	return (
		<section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
			<ProfessionalTimeline
				professional={experiencesData}
				headingSection={'Work Experience'}
			/>
		</section>
	);
}
