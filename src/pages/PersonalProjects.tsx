interface Project {
	title: string
	description: string
	technologies: string[]
	repository: string | null
}

export default function PersonalProjects() {
	const projects_jsx: JSX.Element[] = [
		<div>
			<h2>This website</h2>
			<p>Created with Vite, React, Tailwind</p>
			<p>Hosted on GitHub Pages</p>
			<a href="https://github.com/MBadea21/portofolio"> View on Github</a>
		</div>,
	]

	const projects: Project[] = [
		{
			title: "This website",
			description:
				"A website to showcase my web development skills and to provide easy access to my other projects.",
			technologies: ["Vite", "React", "Tailwind"],
			repository: "https://github.com/MBadea21/portofolio",
		},
	]

	return (
		<div className="mx-auto lg:max-w-screen-xl lg:pl-5">
			<h1>Personal Projects</h1>
			<ul className="flex flex-col">
				{projects.map((project, index) => (
					<li key={index} className="mb-4">
						<h2 className="text-xl font-semibold">{project.title}</h2>
						<p>{project.description}</p>
						<p>Technologies: {project.technologies.join(", ")}</p>
						{project.repository && (
							<button>
								<a href={project.repository}>View on Github</a>
							</button>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
