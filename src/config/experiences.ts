import { ExperiencesData } from '@/models/experienceIntarfaces';

export const experiencesData: ExperiencesData = [
	{
		title: 'Technical Project Manager & Research and Development Engineer',
		company: {
			name: 'Akio',
			link: 'https://www.akio.com',
			description:
				'Software development company specializing in customer satisfaction.',
		},
		location: 'Paris',
		description:
			'Responsible for designing and developing custom Java applications, creating and integrating APIs, managing project lifecycle, providing technical assistance, and ensuring client satisfaction.',
		status: 'current',
		dateBegin: 'May 2023',
		dateEnd: 'Present',
	},
	{
		title: 'Computer Technician and Support',
		company: {
			name: 'Self-Employed',
			description:
				'Company specializes in the repair of computers and peripheral equipment business sector.',
		},
		location: 'Various',
		description: 'Repair of computer tools (phones, computers, etc.).',
		status: 'done',
		dateBegin: '2019',
		dateEnd: '2022',
	},
];
