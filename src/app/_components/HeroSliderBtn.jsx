"use client";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import Button from "@/app/_ui/Button";
import { useSlider } from "@/app/_components/SliderContext";

function HeroSliderBtn() {
	const { increaseCurSlide, decreaseCurSlide } = useSlider();
	return (
		<aside className='flex gap-2 '>
			<Button className='p-1 rounded-2xl' onClick={decreaseCurSlide}>
				<IoIosArrowBack />
			</Button>
			<Button className='p-1 rounded-2xl' onClick={increaseCurSlide}>
				<IoIosArrowForward />
			</Button>
		</aside>
	);
}

export default HeroSliderBtn;
