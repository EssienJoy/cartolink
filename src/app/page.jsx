import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import Features from "@/app/_components/Features";
import Footer from "@/app/_components/Footer";
import { ToggleProvider } from "@/app/_components/TogglenavContext";

function page() {
	return (
		<>
			<ToggleProvider>
				<Header />
			</ToggleProvider>
			<main>
				<Hero />
				<Features />
			</main>
			<Footer />
		</>
	);
}

export default page;
