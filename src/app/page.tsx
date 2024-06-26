import ParticlesContainer from "@/components/background/particlesContainer";
import Card from "@/components/card/exemple-card";
import { DonateBtn } from '@/components/donate';
import About from '@/components/main/about';
import HeroSection from '@/components/main/HeroSection';
import Projects from '@/components/main/projects';
import Experiences from '@/components/main/experiences';
import Education from "@/components/main/educations";
import Skills from "@/components/main/skills";
import ContactForm from '@/components/main/contactForm';

export default function Home() {
	return (
		<main className="">
			<ParticlesContainer />
			<HeroSection />
			<About />
			<Experiences />
			<Education />
			<Projects />
			<Skills />
			<ContactForm />
		</main>
	);
}
