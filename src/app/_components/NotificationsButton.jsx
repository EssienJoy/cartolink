"use client";

import { IoMdNotifications } from "react-icons/io";
import Button from "@/app/_ui/Button";

function NotificationsButton() {
	return (
		<Button className='p-2 rounded-lg' onClick={() => console.log("hello")}>
			<IoMdNotifications />
		</Button>
	);
}

export default NotificationsButton;
