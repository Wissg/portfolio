"use client";

import * as React from "react";
import Link from "next/link";

import { NavMenu, NavMenuItem, NavMenuLink } from "@/models/navMenuInterfaces";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { MenuLinks } from "@/components/header/menuLinks";

interface NavMenuProps {
	items: NavMenuItem[];
}

export function MainNav({ items }: NavMenuProps) {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{items.map(
					(menuItem, index) =>
						!menuItem.isHidden && (
							<NavigationMenuItem key={index}>
								{menuItem.isLink ? (
									<Link href={menuItem.href || ""} legacyBehavior passHref>
										<NavigationMenuLink
											className={navigationMenuTriggerStyle()}>
											{menuItem.title}
										</NavigationMenuLink>
									</Link>
								) : (
									<NavigationMenuTrigger disabled={menuItem.isDisabled}>
										{menuItem.title}
									</NavigationMenuTrigger>
								)}
								{menuItem.links && (
									<NavigationMenuContent>
										<MenuLinks links={menuItem.links} />
									</NavigationMenuContent>
								)}
							</NavigationMenuItem>
						)
				)}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
