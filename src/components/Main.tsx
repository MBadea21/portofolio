import Navbar from "./Navbar"
import "../globals.css"
import Home from "pages/Home"
import PersonalProjects from "pages/PersonalProjects"
import { useState } from "react"

export default function Main() {
	const pages: { [key: string]: JSX.Element } = {
		Home: <Home />,
		"Personal Projects": <PersonalProjects />,
	}

	const [current_page, setCurrentPage] = useState<JSX.Element>(<Home />)

	function set_page(page_name: string) {
		setCurrentPage(pages[page_name])
	}

	return (
		<div className="bg-zinc-900 min-h-screen text-neutral-100">
			<Navbar pages={Object.keys(pages)} set_page={set_page} />
			{current_page}
		</div>
	)
}
