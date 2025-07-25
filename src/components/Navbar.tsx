import { useState } from "react"
import { RxHamburgerMenu } from "react-icons/rx"
import { RxCross2 } from "react-icons/rx"

interface NavbarProps {
	pages: string[]
	set_page: (page: string) => void
}

export default function Navbar({ pages, set_page }: NavbarProps) {
	const [show_nav, set_show_nav] = useState<Boolean>(false)

	function toggle_nav() {
		set_show_nav(!show_nav)
		console.log(`show_nav now = ${show_nav}`)
	}

	return (
		<div>
			<nav
				className={
					"bg-base-200 shadow-sm mx-auto max-w-screen lg:max-w-screen-xl min-w-screen lg:min-w-fit flex flex-col lg:flex-row justify-between lg:items-center space-y-4 lg:space-y-0 p-5 lg:p-0 lg:py-3 fixed lg:relative " +
					`lg:visible ${!show_nav ? "invisible" : ""}`
				}
			>
				<div className="cursor-default pl-3 lg:pl-5">
					<h1 className="text-2xl font-bold">Mihai Badea</h1>
				</div>

				<div className="">
					<ul className="flex flex-col lg:flex-row">
						{pages.map((page) => (
							<li key={page} className="">
								<button
									className="px-3 py-2.5 hover:text-blue-500 transition-all duration-100 ease-in-out"
									onClick={() => set_page(page)}
								>
									{page}
								</button>
							</li>
						))}
					</ul>
				</div>
			</nav>
			<div className="lg:hidden fixed right-0.5 top-0.5 flex place-items-center border-red-500 border min-h-15 min-w-15">
				<button className="hover:cursor-pointer mx-auto" onClick={toggle_nav}>
					{show_nav ? <RxCross2 size={35} /> : <RxHamburgerMenu size={35} />}
				</button>
			</div>
		</div>
	)
}
