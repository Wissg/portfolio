"use client";

import * as React from "react";
import { Minus, Plus } from "lucide-react";
import { appConfig } from "@/config/app";

import { Button } from "@/components/ui/button";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export function DonateBtn() {
	const defaultAmount = 5;
	const minAmount = 1;
	const maxAmount = 999;
	const step = 5;

	const [goal, setGoal] = React.useState(defaultAmount);

	function onClick(adjustment: number) {
		setGoal(Math.max(minAmount, Math.min(maxAmount, goal + adjustment)));
	}

	function getPaypalLink() {
		return appConfig.links.paypal.replace('{amount}', goal.toString());
	}

	const handleGoalChange = (newValue: string) => {
		const newValueParsed = parseInt(newValue);
		if (!isNaN(newValueParsed)) {
			setGoal(Math.min(maxAmount, Math.max(minAmount, newValueParsed)));
		}
	};

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="link">Donate</Button>
			</DrawerTrigger>
			<DrawerContent>
				<div className="mx-auto w-full max-w-sm">
					<DrawerHeader>
						<DrawerTitle>Donation</DrawerTitle>
						<DrawerDescription>
							Thank you for your donation ({minAmount}€ - {maxAmount}€).
						</DrawerDescription>
					</DrawerHeader>
					<div className="p-4 pb-0">
						<div className="flex items-center justify-center space-x-2">
							<Button
								variant="outline"
								size="icon"
								className="h-8 w-8 shrink-0 rounded-full"
								onClick={() => onClick(-step)}
								disabled={goal <= minAmount}>
								<Minus className="h-4 w-4" />
								<span className="sr-only">Decrease</span>
							</Button>
							<div className="flex-1 text-center">
								<input
									type="number"
									value={goal}
									min={minAmount}
									max={maxAmount}
									onChange={(e) => handleGoalChange(e.target.value)}
									className="w-1/2 text-center font-bold text-7xl tracking-tighter border-none outline-none bg-transparent"
									pattern="\d*"
								/>
								<span className="text-7xl font-bold tracking-tighter">€</span>

								<div className="text-[0.70rem] uppercase text-muted-foreground">
									EUROS
								</div>
							</div>

							<Button
								variant="outline"
								size="icon"
								className="h-8 w-8 shrink-0 rounded-full"
								onClick={() => onClick(step)}
								disabled={goal >= maxAmount}>
								<Plus className="h-4 w-4" />
								<span className="sr-only">Increase</span>
							</Button>
						</div>
					</div>
					<DrawerFooter>
						<Button asChild>
							<Link target="_blank" href={getPaypalLink()}>
								Donate
							</Link>
						</Button>
						<DrawerClose asChild>
							<Button variant="outline">Cancel</Button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
