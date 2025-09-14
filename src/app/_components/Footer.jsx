import Logo from "../_ui/Logo";

function Footer() {
	return (
		<footer className='bg-secondary text-secondary-text dark:bg-[#2A2E3A] py-5 '>
			<section className='flex flex-col gap-2 sm:flex-row justify-between mx-auto max-w-[var(--container-main)] px-[var(--spacing-main)] '>
				<div className='flex gap-2'>
					<Logo className='bg-white-background rounded-3xl' />
					<h2 className='text-xl font-bold sm:text-3xl'>Krea AI</h2>
				</div>

				<div className='flex gap-4'>
					<p className='text-xl font-bold sm:text-3xl'>curated by</p>
					<p className=' font-bold text-xl sm:text-3xl'>Mobbin</p>
				</div>
			</section>
		</footer>
	);
}

export default Footer;
