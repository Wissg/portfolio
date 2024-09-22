import {TailwindIndicator} from "@/utils/tailwind-indicator";
import {DonateBtn} from '../donate';

export function SiteFooter() {
    return (
        <footer
            className="bottom-0 left-0 z-20 w-full p-4 border-t shadow md:flex md:items-center md:justify-between md:p-6 bg-background">
			<span className="text-sm text-gray-500 text-center sm:text-left">
                © 2024{' '}
                <a href="/" className="hover:underline">
                    Wissg™
                </a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 space-x-4">
                <li>
                    <TailwindIndicator position="md:me-6"/>
                </li>
                <li>
                    <DonateBtn/>
                </li>
            </ul>
        </footer>

    );
}
