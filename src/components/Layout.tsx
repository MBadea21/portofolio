import Navbar from "./Navbar"
import "../globals.css"

export default function Layout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="bg-zinc-900 min-h-screen text-neutral-100">
			<Navbar />

			{children}
		</div>
	)
}
