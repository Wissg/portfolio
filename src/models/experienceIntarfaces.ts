export interface Company {
	name: string;
	link?: string;
	description?: string;
}

export interface Experience {
	title: string;
	location: string;
	company: Company;
	dateBegin: string;
	dateEnd: string;
	description: any;
	status?:
		| 'current'
		| 'done'
		| 'default'
		| 'error'
		| 'custom'
		| null
		| undefined;
}

export type ExperiencesData = ReadonlyArray<Experience>;
