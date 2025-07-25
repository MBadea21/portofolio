interface NavbarProps {
	pages: string[]
	set_page: (page: string) => void
}

export default function Navbar({ pages, set_page }: NavbarProps) {
	return (
		<nav className="bg-zinc-900 flex items-center justify-between max-w-screen-lg p-5 mx-auto text-neutral-200">
			<div className="cursor-default">
				<h1 className="text-2xl font-bold">Mihai Badea</h1>
			</div>

			<div>
				<ul className="flex">
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
	)
}
