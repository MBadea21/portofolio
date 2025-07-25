import { createRoot } from "react-dom/client"
import "tailwindcss/tailwind.css"
import Main from "components/Main"
// import InConstruction from "components/InConstruction"

const container = document.getElementById("root") as HTMLDivElement
const root = createRoot(container)

root.render(<Main />)
