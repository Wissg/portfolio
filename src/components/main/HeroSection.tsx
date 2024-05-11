"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { titleSequence } from "@/config/title-sequence";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { appConfig } from '@/config/app';

const HeroSection = () => {
	return (
		<section className="m-14 py-16">
			<div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 text-center lg:text-left">
					<h1 className="mb-4 m-2 min-h-40 xs:min-h-36 lg:min-h-48 xl:min-h-44 2xl:min-h-48 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">
						<span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hi, I&apos;m{' '}
						</span>
						<br />
						<TypeAnimation
							sequence={titleSequence}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<div className="flex m-2 justify-center lg:justify-start space-x-4 lg:space-x-8 mt-8">
						<Button asChild className="flex-initial px-8 py-3 ">
							<Link href="#contact">Hire me</Link>
						</Button>
						<Button
							variant="outline"
							asChild
							className="flex-initial px-8 py-3 ">
							<Link
								href={appConfig.links.resume.en}
								target="_blank"
								rel="noopener noreferrer"
								locale={false}
								download>
								{' '}
								<Download className="mr-2 h-4 w-4" />
								Resume
							</Link>
						</Button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0 p-5">
					<div className="max-w-lg w-full rounded-full overflow-hidden">
						<div className="relative overflow-hidden">
							<Image
								src="/images/dev-image.jpg"
								alt="dev image"
								className="object-cover w-full h-full rounded-full"
								width={400}
								height={500}
							/>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;
