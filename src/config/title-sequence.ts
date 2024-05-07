export type TitleSequence = typeof titleSequence;
type Sequence = Array<SequenceElement>;
type SequenceElement =
	| string
	| number
	| ((element: HTMLElement | null) => void | Promise<void>);

export const titleSequence: Sequence = [
	"Wissal",
	1000,
	"Softwarre Egeneer",
	1000,
	"Mobile Developer",
	1000,
	"UI/UX Designer",
	1000,
];
