import { NavMenuItem } from "@/models/navMenuInterfaces";

export type NavBarConfig = typeof navItems

export const navItems: NavMenuItem[] = [
	{
		title: "Home",
		links: [
			{ title: "About", href: "/about" },
			{ title: "Contact", href: "/contact" },
		],
		isLink: false,
		isHidden: false,
		isDisabled: false,
	},
	{
		title: "Products",
		links: [
			{ title: "Product 1", href: "/products/1" , isDisabled: true},
			{ title: "Product 2", href: "/products/2" },
		],
		isLink: false,
		isHidden: false,
		isDisabled: false,
	},
	{
		title: "Login",
		href: "/login",
		isLink: true,
		isHidden: false,
		isDisabled: false,
	},
];