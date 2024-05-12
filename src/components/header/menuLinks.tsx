import { NavMenuLink } from '@/models/navMenuInterfaces';
import { NavigationMenuLink } from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

interface MenuLinksProps {
	links: NavMenuLink[];
}

export function MenuLinks({ links }: MenuLinksProps) {
	return (
		<ul
			className={`grid gap-3 p-4 ${
				links.length <= 2 ? 'grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'
			} md:w-[500px] lg:w-[600px] `}>
			{links.map((link, index) => {
				// Skip rendering if link is hidden
				if (link.isHidden) return null;

				const disabledClass = link.isDisabled
					? 'pointer-events-none opacity-50'
					: '';
				const linkProps = link.isDisabled ? {} : { href: link.href };

				return (
					<li key={index}>
						<NavigationMenuLink asChild>
							<a
								className={`block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${disabledClass}`}
								{...linkProps}>
								<div className="text-sm font-medium leading-none">
									{link.title}
								</div>
								<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
									{link.description}
								</p>
							</a>
						</NavigationMenuLink>
					</li>
				);
			})}
		</ul>
	);
}
