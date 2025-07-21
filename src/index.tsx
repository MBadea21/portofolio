import { createRoot } from "react-dom/client"
import "tailwindcss/tailwind.css"
import Home from "components/Home"
import Layout from "components/Layout"
// import InConstruction from "components/InConstruction"

const container = document.getElementById("root") as HTMLDivElement
const root = createRoot(container)

root.render(
	// <InConstruction/>
	<Layout>
		<Home />
	</Layout>
)
