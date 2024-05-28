// Interface for Organization
export interface Organization {
	name: string;
	link?: string;
	description?: string;
}

// Enum for status
export enum Status {
	Current = 'current',
	Done = 'done',
	Default = 'default',
	Error = 'error',
	Custom = 'custom',
}

// Base interface for shared properties between Education and Experience
interface ProfessionalData {
	title: string;
	location: string;
	organization: Organization;
	dateBegin: string; // ISO 8601 date string, e.g., '2023-05-01'
	dateEnd: string; // ISO 8601 date string, e.g., '2023-05-01'
	description: string; // Markdown or rich text could be specified
	status?: Status | null;
}


export interface Education extends ProfessionalData {}

// Type for a list of Education items
export type EducationsData = ReadonlyArray<Education>;

export interface Experience extends ProfessionalData {}

// Type for a list of Experience items
export type ExperiencesData = ReadonlyArray<Experience>;
