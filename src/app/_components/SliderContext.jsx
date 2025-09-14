"use client";

import { createContext, useContext, useState } from "react";
import slider from "@/app/_lib/sliderData";

const SliderContext = createContext();

function SliderProvider({ children }) {
	const [curSlide, setCurSlide] = useState(0);
	const maxSlide = slider.length;

	function increaseCurSlide() {
		setCurSlide((num) => (num + 1) % maxSlide);
	}

	function decreaseCurSlide() {
		setCurSlide((num) => (num - 1 + maxSlide) % maxSlide);
	}

	return (
		<SliderContext.Provider
			value={{
				curSlide,
				maxSlide,
				increaseCurSlide,
				decreaseCurSlide,
			}}>
			{children}
		</SliderContext.Provider>
	);
}

function useSlider() {
	const context = useContext(SliderContext);
	if (context === undefined)
		throw new Error("Context was used outside provider");
	return context;
}

export { SliderProvider, useSlider };
