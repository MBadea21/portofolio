import Navbar from "./Navbar"
import "../globals.css"

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div>
			<Navbar />

			{children}
		</div>
	)
}
