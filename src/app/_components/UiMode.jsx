"use client";

import { MdSunny } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";

import Input from "@/app/_ui/Input";
import { useEffect, useState } from "react";

function UiMode() {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("theme") || "light";
		}
		return "light";
	});

	useEffect(() => {
		localStorage.setItem("theme", theme);
		const htmlEl = document.documentElement;

		if (theme === "dark") {
			htmlEl.classList.add("dark");
		}
		if (theme === "light") {
			htmlEl.classList.remove("dark");
		}
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			htmlEl.classList.add("dark");
		}
		document.cookie = `themeMode=${theme}; path=/; max-age=31536000`;
	}, [theme]);

	return (
		<label
			className='bg-grey-background p-2 rounded-lg flex dark:text-primary-text'
			htmlFor='uimode'>
			<Input
				type='checkbox'
				id='uimode'
				onChange={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
				className='hidden'
			/>
			{theme === "light" ? <MdSunny /> : <FaRegMoon />}
		</label>
	);
}

export default UiMode;
