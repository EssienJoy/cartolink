"use client";

function Button({ children, onClick, className = "" }) {
	return (
		<button
			className={`${className} bg-grey-background text-primary-text rounded-2xl `}
			onClick={() => onClick()}>
			{children}
		</button>
	);
}

export default Button;
