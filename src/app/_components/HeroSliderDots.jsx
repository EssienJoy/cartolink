"use client";

import { useSlider } from "@/app/_components/SliderContext";

function HeroSliderDots() {
	const { curSlide, maxSlide: totalSlides } = useSlider();

	return (
		<div className='flex gap-2 mx-auto'>
			{Array.from({ length: totalSlides }).map((_, i) => (
				<div
					key={i}
					className={`w-3 h-3 rounded-full transition ${
						i === curSlide
							? "bg-black-background dark:bg-gray-400"
							: "bg-grey-background "
					}`}></div>
			))}
		</div>
	);
}

export default HeroSliderDots;
