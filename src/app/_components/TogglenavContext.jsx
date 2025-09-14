"use client";

import { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

function ToggleProvider({ children }) {
	const [toggleNav, setToggleNav] = useState(null);

	function openNav() {
		setToggleNav(true);
	}

	function closeNav() {
		setToggleNav(false);
	}

	return (
		<ToggleContext.Provider
			value={{
				toggleNav,
				openNav,
				closeNav,
			}}>
			{children}
		</ToggleContext.Provider>
	);
}

function useToggle() {
	const context = useContext(ToggleContext);
	if (context === undefined)
		throw new Error("Context was used outside provider");
	return context;
}

export { ToggleProvider, useToggle };
