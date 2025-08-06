import { AnimatePresence, motion } from "motion/react"

interface PageManagerProps {
	pages_dict: { [key: string]: JSX.Element }
	current_page_name: string
}

export default function PageManager({
	pages_dict: pages_dict,
	current_page_name,
}: PageManagerProps) {
	return (
		<div>
			<AnimatePresence mode="wait">
				<motion.div
					key={current_page_name}
					initial={{ opacity: 0, x: 100 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -100 }}
					transition={{ duration: 0.3 }}
					className=""
				>
					{pages_dict[current_page_name]}
				</motion.div>
			</AnimatePresence>
		</div>
	)
}
