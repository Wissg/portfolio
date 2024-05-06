import Card from "@/components/card/exemple-card";
import { DrawerDemo } from "@/components/donate";

export default function Home() {
	return (
		<main className="">
			<div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
				<Card
					href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					title="Docs"
					description="Find in-depth information about Next.js features and API."
				/>

				<Card
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
					title="Learn"
					description="Learn about Next.js in an interactive course with quizzes!"
				/>
				<Card
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					title="Templates"
					description="Explore starter templates for Next.js."
				/>
				<Card
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					title="Deploy"
					description="Instantly deploy your Next.js site to a shareable URL with Vercel."
				/>
				<Card
					href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					title="Deploy"
					description="dsdl."
				/>
				<DrawerDemo />
			</div>
		</main>
	);
}
