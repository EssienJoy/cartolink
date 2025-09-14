import { cookies } from "next/headers";
import { Open_Sans } from "next/font/google";
import "@/app/_styles/globals.css";

const openSans = Open_Sans({
	subsets: ["latin"],
});

export const metadata = {
	title: "Cartolinks",
	description: "cartolinks project",
};

export default async function RootLayout({ children }) {
	const cookieStore = await cookies();
	const theme = cookieStore.get("themeMode")?.value || "light";

	return (
		<html lang='en' className={`${theme}`}>
			<body
				className={` ${openSans.className} dark:bg-secondary dark:text-secondary-text bg-primary text-primary-text`}>
				{children}
			</body>
		</html>
	);
}
