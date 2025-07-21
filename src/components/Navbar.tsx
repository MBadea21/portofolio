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

	return (
		<nav>
			<ul>
				<li>
					<a href={new_ref + "/"}>Home</a>
					<a href={new_ref + "/personal_projects"}>Personal Projects</a>
				</li>
			</ul>
		</nav>
	)
}
