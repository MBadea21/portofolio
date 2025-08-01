import Home from "pages/Home"
import PersonalProjects from "pages/PersonalProjects"
import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { RxCross2 } from "react-icons/rx"

export default function Main() {
	const pages: { [key: string]: JSX.Element } = {
		Home: <Home />,
		"Personal Projects": <PersonalProjects />,
	}

	const [current_page, set_current_page_element] = useState<JSX.Element>(
		<Home />
	)
	const [mobile_nav_visible, set_mobile_nav_visible] = useState<boolean>(false)

	function set_page(page_name: string) {
		set_current_page_element(pages[page_name])
	}

	return (
		<div className="">
			{/* Navbar */}
			<nav className="bg-base-200 flex flex-col p-3 lg:flex-row lg:justify-between lg:px-5">
				<div className="flex justify-between">
					<button
						className="cursor-pointer text-2xl"
						onClick={() => set_page("Home")}
					>
						Mihai Badea
					</button>
					<button
						className="lg:hidden"
						onClick={() => {
							set_mobile_nav_visible(!mobile_nav_visible)
						}}
					>
						{mobile_nav_visible ? (
							<RxCross2 size={35} />
						) : (
							<RxHamburgerMenu size={35} />
						)}
					</button>
				</div>
				<div
					className={`text-lg lg:mt-auto lg:inline-block ${
						mobile_nav_visible ? "" : "hidden"
					}`}
				>
					<ul className="flex flex-col lg:flex-row">
						{Object.keys(pages).map((page_name) => (
							<li key={page_name} className="pt-5 lg:pt-0 lg:pl-5">
								<button
									className="cursor-pointer transition-all duration-100 ease-in-out hover:text-blue-500"
									onClick={() => set_page(page_name)}
								>
									{page_name}
								</button>
							</li>
						))}
					</ul>
				</div>
			</nav>
			{/* Main Content */}
			<div className="">{current_page}</div>

			{/* Paddng for scrolling at the bottom */}
			<div className="h-screen"></div>
		</div>
	)
}
