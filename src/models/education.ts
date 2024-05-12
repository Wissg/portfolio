export interface Education {
	title: string;
	location: string;
	date: string;
	description: string;
	status?:
		| 'current'
		| 'done'
		| 'default'
		| 'error'
		| 'custom'
		| null
		| undefined;
}

export type EducationsData = ReadonlyArray<Education>;
