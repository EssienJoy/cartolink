import Link from "next/link";
import { MdHomeFilled } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { RiGalleryFill } from "react-icons/ri";
import { MdEdit } from "react-icons/md";
import { BiSolidCreditCardAlt } from "react-icons/bi";
import { BiSolidEyedropper } from "react-icons/bi";
import { LiaAutoprefixer } from "react-icons/lia";

function Navbar() {
	return (
		<nav className='bg-grey-background rounded-2xl p-2 hidden lg:block'>
			<ul className='flex gap-5 items-center dark:text-primary-text'>
				<li className='bg-white-background py-1.5 px-3 rounded-xl'>
					<Link href='/'>
						<MdHomeFilled size='1.25rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<RiGalleryFill size='1.25rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<BsFillCameraVideoFill size='1.25rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<MdEdit size='1.25rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<BiSolidEyedropper size='1.25rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<LiaAutoprefixer size='1.25rem' />
					</Link>
				</li>
				<li>
					<Link href='#'>
						<BiSolidCreditCardAlt size='1.25rem' />
					</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
