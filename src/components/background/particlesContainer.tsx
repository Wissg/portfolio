"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { particlesConfigDark, particlesConfigLight } from "@/config/particles";
import { Container, ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "next-themes";
import { getTheme } from "@/utils/webUtils";

function getParticleConfig(
	theme: string | undefined,
	systemTheme: "light" | "dark" | undefined
): ISourceOptions {
	const currentTheme = getTheme(theme, systemTheme);
	return currentTheme === "light" ? particlesConfigLight : particlesConfigDark;
}

const ParticlesContainer: React.FC = () => {
	const [init, setInit] = useState(false);
	const { theme, systemTheme } = useTheme();
	const defaultParticlesConfig = getParticleConfig(theme, systemTheme);
	const [particlesConfig, setParticlesConfig] = useState(
		defaultParticlesConfig
	);

	useEffect(() => {
		setParticlesConfig(getParticleConfig(theme, systemTheme));
	}, [theme, systemTheme]);

	useEffect(() => {
		const initializeParticles = async () => {
			await initParticlesEngine(async (engine) => {
				await loadSlim(engine);
			}).then(() => {
				setInit(true);
			});
		};

		initializeParticles();
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => particlesConfig,
		[particlesConfig]
	);

	return (
		<>
			{init && (
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			)}
		</>
	);
};

export default ParticlesContainer;
