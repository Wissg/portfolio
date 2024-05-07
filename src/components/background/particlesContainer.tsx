"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.
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

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
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
