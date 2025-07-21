import { createRoot } from "react-dom/client"
import "tailwindcss/tailwind.css"
import PersonalProjects from "components/PersonalProjects"
import Layout from "components/Layout"

const container = document.getElementById("root") as HTMLDivElement
const root = createRoot(container)

root.render(
	<Layout>
		<PersonalProjects />
	</Layout>
)
