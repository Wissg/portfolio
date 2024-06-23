import Link from "next/link";

import { appConfig } from "@/config/app";
import { navItems } from "@/config/navBar";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons/header-icons";
import { MainNav } from "@/components/header/main-navBar";
import { ThemeToggle } from "@/components/theme-toggle";
import { Linkedin } from 'lucide-react';
import { LocaleToggle } from '@/components/LocaleToggle';

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
				<MainNav items={navItems} />
				<div className="flex flex-1 items-center justify-end">
					<nav className="flex items-center space-x-3">
						<Link
							href={appConfig.links.github}
							target="_blank"
							rel="noreferrer">
							<div
								className={buttonVariants({
									size: 'icon',
									variant: 'ghost',
								})}>
								<Icons.gitHub className="h-5 w-5" />
								<span className="sr-only">GitHub</span>
							</div>
						</Link>
						<Link
							href={appConfig.links.linkedin}
							target="_blank"
							rel="noreferrer">
							<div
								className={buttonVariants({
									size: 'icon',
									variant: 'ghost',
								})}>
								<Linkedin className="h-4 w-4 fill-current" />
								<span className="sr-only">Linkedin</span>
							</div>
						</Link>
						<LocaleToggle />
						<ThemeToggle />
					</nav>
				</div>
			</div>
		</header>
	);
}
