import Link from 'next/link';
import { headers } from 'next/headers';
import { Button } from '@/components/ui/button';

export default async function NotFound() {
	const headersList = headers();
	const domain = headersList.get('host');
	return (
		<section className="font-sans h-screen flex flex-col items-center justify-center">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h1 className="mb-4 text-7xl lg:text-9xl font-extrabold text-primary-600">
						404
					</h1>
					<p className="mb-4 text-3xl font-bold">Something&aposs missing.</p>
					<p className="mb-4 text-lg font-light">
						Sorry, we can&apost find that page. You&aposll find lots to explore
						on the home page.
					</p>
					<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
						<Button asChild>
							<Link href="/">Back to Homepage</Link>
						</Button>
						<Button variant="outline" asChild>
							<Link href="mailto:votreadresse@mail.fr">Contact Support</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
