import { NavMenuItem } from "@/models/navMenuInterfaces";

export type NavBarConfig = typeof navItems

export const navItems: NavMenuItem[] = [
	{
		title: 'Home',
		href: '/',
		isLink: true,
		isHidden: false,
		isDisabled: false,
	},
	{
		title: 'Sections',
		links: [
			{
				title: 'About Me',
				href: '#about',
				description: 'Learn more about my background, interests, and skills.',
			},
			{
				title: 'Skills',
				href: '#skills',
				description: 'Explore my skills and expertise in various domains.',
			},
			{
				title: 'Experience',
				href: '#experience',
				description: 'Discover my professional journey and work experience.',
			},
			{
				title: 'Education',
				href: '#education',
				description: 'Explore my educational journey and projects.',
			},
			{
				title: 'Projects',
				href: '#projects',
				description: 'View my portfolio of past and ongoing projects.',
			},
			{
				title: 'Contact',
				href: '#contact',
				description:
					'Get in touch with me to discuss collaborations, opportunities, or inquiries.',
			},
		],
		isLink: false,
	},
];