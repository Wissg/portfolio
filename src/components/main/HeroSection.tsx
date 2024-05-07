"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { titleSequence } from "@/config/title-sequence";

const HeroSection = () => {
	return (
		<section className="py-16">
			<div className="flex flex-col lg:flex-row">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 place-self-center text-center lg:text-left">
					<h1 className="mb-4 text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold">
						<span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hi, I&apos;m{" "}
						</span>
						<br />
						<TypeAnimation
							sequence={titleSequence}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="w-full lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0 p-5">
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
