"use client";

import { CgMenuRightAlt } from "react-icons/cg";
import Button from "../_ui/Button";
import { useToggle } from "@/app/_components/TogglenavContext";

function HarmburgerMenu() {
	const { openNav } = useToggle();
	return (
		<Button className='lg:hidden p-1 rounded-lg' onClick={openNav}>
			<CgMenuRightAlt size='1.5rem' />
		</Button>
	);
}

export default HarmburgerMenu;
