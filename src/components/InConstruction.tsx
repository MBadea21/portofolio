import { FaTools } from "react-icons/fa"

export default function InConstruction() {
	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<FaTools size="80" />
			<h3 className="mt-10 text-3xl font-bold">In Construction</h3>
			<p className="mt-4 text-xl">
				This page is under construction. Please check back later.
			</p>
		</div>
	)
}
