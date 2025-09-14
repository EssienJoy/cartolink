"use client";

function Input({ type, className = "", onChange, ...params }) {
	return (
		<input
			type={type}
			{...params}
			className={` text-primary-text ${className}`}
			onChange={onChange}
		/>
	);
}

export default Input;
