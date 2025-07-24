export default function Navbar() {
	const base_ref: string = import.meta.env.BASE_URL

	// if (base_ref === "/") {
	// 	console.log("Base URL is root")
	// } else if (base_ref === "/portofolio/") {
	// 	console.log("Base URL is portofolio")
	// }

	console.log("Base URL:", base_ref)

	let new_ref: string = base_ref

	if (base_ref === "/") {
		new_ref = ""
	}
	console.log("New Base URL:", new_ref)

	const nav_links = [
		{ name: "Home", path: new_ref + "/" },
		{ name: "Personal Projects", path: new_ref + "/personal_projects" },
	]

	return (
		<nav className="bg-zinc-900 flex items-center justify-between max-w-screen-lg p-5 mx-auto text-neutral-200">
			<div className="cursor-default">
				<h1 className="text-2xl font-bold">Mihai Badea</h1>
			</div>

			<div>
				<ul className="flex space-x-10">
					{nav_links.map((nav) => (
						<li key={nav.name} className="">
							<a
								href={nav.path}
								className="px-3 py-2.5 hover:text-blue-500 transition-all duration-100 ease-in-out"
							>
								{nav.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}
