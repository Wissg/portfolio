
export interface Skills {
	name: string;
	proficiency?: string;
	years?: number;
}
export interface SkillsCategory {
	category: string;
	skills: ReadonlyArray<Skills>;
}

type SkillsData = ReadonlyArray<SkillsCategory>;
export const skillsData: SkillsData = [
	{
		category: 'Programming Languages',
		skills: [
			{ name: 'TypeScript', proficiency: 'Advanced', years: 3 },
			{ name: 'R', proficiency: 'Intermediate', years: 2 },
			{ name: 'Java', proficiency: 'Advanced', years: 5 },
			{ name: 'MATLAB', proficiency: 'Intermediate', years: 4 },
			{ name: 'Python', proficiency: 'Advanced', years: 5 },
			{ name: 'C++', proficiency: 'Intermediate', years: 3 },
			{ name: 'C', proficiency: 'Intermediate', years: 3 },
			{ name: 'LATEX', proficiency: 'Advanced', years: 4 },
			{ name: 'CSS', proficiency: 'Advanced', years: 5 },
			{ name: 'Php', proficiency: 'Intermediate', years: 3 },
			{ name: 'SQL', proficiency: 'Advanced', years: 4 },
			{ name: 'JavaScript', proficiency: 'Advanced', years: 5 },
			{ name: 'jQuery', proficiency: 'Intermediate', years: 3 },
			{ name: 'Pascal', proficiency: 'Basic', years: 1 },
			{ name: 'Shell Bash', proficiency: 'Intermediate', years: 3 },
			{ name: 'FreeMarker', proficiency: 'Basic', years: 1 },
			{ name: 'VBA', proficiency: 'Intermediate', years: 2 },
		],
	},
	{
		category: 'Markup Languages',
		skills: [
			{ name: 'HTML', proficiency: 'Advanced', years: 5 },
			{ name: 'XML', proficiency: 'Intermediate', years: 2 },
		],
	},
	{
		category: 'Frameworks and Libraries',
		skills: [
			{ name: 'Angular', proficiency: 'Intermediate', years: 3 },
			{ name: 'React', proficiency: 'Advanced', years: 4 },
			{ name: 'Bootstrap', proficiency: 'Advanced', years: 4 },
			{ name: 'Tailwind CSS', proficiency: 'Intermediate', years: 2 },
			{ name: 'Spring Boot', proficiency: 'Intermediate', years: 3 },
			{ name: 'Dropwizard', proficiency: 'Basic', years: 1 },
			{ name: 'pandas', proficiency: 'Advanced', years: 3 },
			{ name: 'scikit-learn', proficiency: 'Advanced', years: 3 },
			{ name: 'TensorFlow/Keras', proficiency: 'Intermediate', years: 2 },
			{ name: 'Next.js', proficiency: 'Intermediate', years: 2 },
			{ name: 'Node.js', proficiency: 'Advanced', years: 4 },
			{ name: 'Django', proficiency: 'Intermediate', years: 2 },
			{ name: 'Flask', proficiency: 'Intermediate', years: 2 },
			{ name: 'Framer Motion', proficiency: 'Intermediate', years: 1 },
		],
	},
	{
		category: 'Dependency Management Tools',
		skills: [
			{ name: 'Gradle', proficiency: 'Intermediate', years: 2 },
			{ name: 'Maven', proficiency: 'Intermediate', years: 3 },
		],
	},
	{
		category: 'Operating Systems',
		skills: [
			{ name: 'Unix', proficiency: 'Advanced', years: 4 },
			{ name: 'OS X', proficiency: 'Advanced', years: 5 },
			{ name: 'Windows', proficiency: 'Advanced', years: 6 },
			{ name: 'Linux', proficiency: 'Advanced', years: 4 },
		],
	},
	{
		category: 'Other Tools',
		skills: [
			{ name: 'Git', proficiency: 'Advanced', years: 5 },
			{ name: 'Prisma', proficiency: 'Intermediate', years: 1 },
			{ name: 'PostgreSQL', proficiency: 'Intermediate', years: 3 },
		],
	},
];
