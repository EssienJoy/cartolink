import Image from "next/image";

import logo from "../../../public/images/kLogo.png";

function Logo({ className = "" }) {
	return (
		<figure className={`relative w-[2rem] h-[2rem]  ${className}`}>
			<Image
				src={logo}
				alt='logo'
				fill
				quality={100}
				placeholder='blur'
				className='object-contain rounded-3xl'
			/>
		</figure>
	);
}

export default Logo;
