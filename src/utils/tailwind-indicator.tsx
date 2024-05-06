export function TailwindIndicator({ position }: { position: string }) {
	if (process.env.NODE_ENV === "production") return null;

	const defaultPosition =
		"fixed bottom-1 left-1 z-50 flex items-center justify-start space-x-2";
	const className = position ? `${position}` : defaultPosition;

	return (
		<div className={className}>
			<div className="rounded-full bg-gray-800 p-2 text-xs text-white sm:hidden">
				xs
			</div>
			<div className="hidden sm:block md:hidden rounded-full bg-gray-800 p-2 text-xs text-white">
				sm
			</div>
			<div className="hidden md:block lg:hidden rounded-full bg-gray-800 p-2 text-xs text-white">
				md
			</div>
			<div className="hidden lg:block xl:hidden rounded-full bg-gray-800 p-2 text-xs text-white">
				lg
			</div>
			<div className="hidden xl:block 2xl:hidden rounded-full bg-gray-800 p-2 text-xs text-white">
				xl
			</div>
			<div className="hidden 2xl:block rounded-full bg-gray-800 p-2 text-xs text-white">
				2xl
			</div>
		</div>
	);
}
