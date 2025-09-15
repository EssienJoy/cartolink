import { useState } from "react";

export default function useToggle() {
	const [toggle, setIsToggle] = useState(false);

	function toggleState() {
		setIsToggle((prev) => !prev);
	}

	return { toggle, toggleState };
}
