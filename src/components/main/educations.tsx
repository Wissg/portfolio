import ProfessionalTimeline from '../professionalTimeline';
import { educationsData } from '@/config/educations';

export default function Education() {
	return (
		<ProfessionalTimeline
			professional={educationsData}
			headingSection={'Education'}
		/>
	);
}
