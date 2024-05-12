import ParticlesContainer from "@/components/background/particlesContainer";
import Card from "@/components/card/exemple-card";
import { DrawerDemo } from "@/components/donate";
import About from '@/components/main/about';
import HeroSection from '@/components/main/HeroSection';
import Projects from '@/components/main/projects';
import Experiences from '@/components/main/experiences';

export default function Home() {
	return (
		<main className="">
			<ParticlesContainer />
			<HeroSection />
			<About />
			<Experiences />
			<Projects />
			<DrawerDemo />
		</main>
	);
}
