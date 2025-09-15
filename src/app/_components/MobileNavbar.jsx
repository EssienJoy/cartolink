"use client";

import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";
import { BsFillCameraVideoFill, BsHeadset } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { BiSolidEyedropper } from "react-icons/bi";
import { LiaAutoprefixer } from "react-icons/lia";
import { FaTimes } from "react-icons/fa";

import Button from "../_ui/Button";
import { useToggle } from "@/app/_components/TogglenavContext";

function MobileNavbar() {
	const { closeNav, toggleNav } = useToggle();
	return (
		<nav
			className={`bg-grey-background transition-all dark:text-primary-text  rounded-2xl py-4 px-2 lg:hidden fixed top-0 right-0 z-1000`}
			style={
				toggleNav === false || toggleNav === null
					? { transform: "translateY(-100%)" }
					: { transform: "translateY(0)" }
			}>
			<ul className='flex flex-col gap-5 items-center'>
				<li>
					<Button onClick={closeNav}>
						<FaTimes size='1.5rem' />
					</Button>
				</li>
				<li className='bg-white-background py-1.5 px-3 rounded-xl'>
					<Link href='/'>
						<MdHomeFilled size='2rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<RiGalleryFill size='2rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<BsFillCameraVideoFill size='2rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<MdEdit size='2rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<BiSolidEyedropper size='2rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<LiaAutoprefixer size='2rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<BiSolidCreditCardAlt size='2rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<RiGalleryFill size='2rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<BsHeadset size='2rem' />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default MobileNavbar;
