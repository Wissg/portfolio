export type TitleSequence = typeof titleSequence;
type Sequence = Array<SequenceElement>;
type SequenceElement =
	| string
	| number
	| ((element: HTMLElement | null) => void | Promise<void>);

export const titleSequence: Sequence = [
	'Wissal',
	1000,
	'Software Engineer',
	1000,
	'Project Manager',
	1000,
	'Back End Developer',
	1000,
	'Full Stack Developer',
	1000,
];

