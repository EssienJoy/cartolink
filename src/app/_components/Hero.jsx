import HeroSliderBtn from "@/app/_components/HeroSliderBtn";
import HeroSliderDots from "@/app/_components/HeroSliderDots";
import HeroSlides from "@/app/_components/HeroSlides";
import { SliderProvider } from "@/app/_components/SliderContext";

function Hero() {
	return (
		<section className='my-10 overflow-hidden mx-auto max-w-[var(--container-main)] px-[var(--spacing-main)]'>
			<SliderProvider>
				<HeroSlides />
				<div className='flex items-center justify-between '>
					<HeroSliderDots />
					<HeroSliderBtn />
				</div>
			</SliderProvider>
		</section>
	);
}

export default Hero;
