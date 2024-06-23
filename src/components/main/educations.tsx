import ProfessionalTimeline from '../professionalTimeline';
import { educationsData } from '@/config/educations';

export default function Education() {
	return (
		<section id="education" className="scroll-mt-28 mb-28 sm:mb-40">
			<ProfessionalTimeline
				professional={educationsData}
				headingSection={'Education'}
			/>
		</section>
	);
}
