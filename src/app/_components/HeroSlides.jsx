"use client";
import Image from "next/image";
import Link from "next/link";

import slider from "@/app/_lib/sliderData";
import { useSlider } from "@/app/_components/SliderContext";

function HeroSlides() {
	const { curSlide } = useSlider();

	return (
		<div
			className='w-[90%] sm:w-[70%] h-[300px] sm:h-[400px] flex gap-5 md:gap-10 transition-transform duration-500 ease-in-out mb-3'
			style={{ transform: `translateX(-${curSlide * 100}%)` }}>
			{slider.map((container, i) => (
				<div
					key={i}
					className='@container w-full flex-shrink-0  h-[300px] sm:h-[400px]'>
					<figure className='relative w-full h-full p-3 sm:p-6'>
						<Image
							src={container.img}
							alt='hero image'
							fill
							quality={100}
							placeholder='blur'
							className='object-cover rounded-3xl'
						/>
						<div className='text-secondary-text relative z-50 max-w-full grid h-full'>
							<p className='text-sm sm:text-md'>{container.miniText}</p>
							<h2 className='text-3xl sm:text-5xl md:text-7xl text-center font-extrabold'>
								{container.title}
							</h2>

							<div className='@xl:flex-row mt-2 flex flex-col gap-1 items-center justify-between'>
								<div className='@xl:max-w-[70%]'>
									<h3 className='font-bold text-lg sm:text-2xl mb-2'>
										{container.subtitle}
									</h3>
									<p className='text-sm sm:text-md'>{container.description}</p>
								</div>

								<Link
									href='#'
									className='relative font-bold text-sm mt-2 bg-white-background py-3 px-6 text-primary-text rounded-3xl'>
									{container.btnText}
								</Link>
							</div>
						</div>
					</figure>
				</div>
			))}
		</div>
	);
}

export default HeroSlides;
