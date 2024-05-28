import { EducationsData, Status } from '@/models/professionalProfileModels';

export const educationsData: EducationsData = [
	{
		title: 'Applied Mathematics Engineer',
		location: 'Cergy',
		organization: {
			name: 'CY Tech',
		},
		dateBegin: '2020',
		dateEnd: '2023',
		description:
			'Maths, economics, finance\n• Stochastic processes, probability theory, and statistics.\n• Monte Carlo simulations for derivative products evaluation.\n• Proficiency in portfolio management, asset pricing models, and calibration.\n• Understanding of financial markets, FinTech, and machine learning applied to finance.',
		status: Status.Done,
	},
	{
		title: 'Study abroad',
		location: 'Novosibirsk, Russia',
		organization: {
			name: 'Novosibirsk State University (NSU)',
		},
		dateBegin: '2022',
		dateEnd: '',
		description:
			'Completed a semester of Economics and Management courses:\n• Organizational Theory and Management Techniques\n• Financial Instruments and Corporate Budgeting',
		status: Status.Done,
	},
	{
		title: 'Bachelor’s degree in mathematics',
		location: 'Cergy',
		organization: {
			name: 'CY Tech',
		},
		dateBegin: '2018',
		dateEnd: '2021',
		description: '',
		status: Status.Done,
	},
	{
		title: 'Baccalaureate Scientifique (equivalent of High School Diploma)',
		location: 'Ermont',
		organization: {
			name: 'Van Gogh',
		},
		dateBegin: '2018',
		dateEnd: '',
		description: 'Physics speciality',
		status: Status.Done,
	},
];
