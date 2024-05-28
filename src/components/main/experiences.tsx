import { experiencesData } from '@/config/experiences';
import ProfessionalTimeline from '../professionalTimeline';

export default function Experiences() {
	return (
		<ProfessionalTimeline
			professional={experiencesData}
			headingSection={'Work Experience'}
		/>
	);
}
