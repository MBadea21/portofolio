interface Project {
	title: string
	description: string
	technologies_list: string[]
	repository_url: string | null
	image_src: string | null
}

import website_picture from "../assets/website_image_temp.png"
import { FaGithub } from "react-icons/fa"

export default function PersonalProjects() {
	const projects: Project[] = [
		{
			title: "This website",
			description:
				"A website to showcase my web development skills and to provide easy access to my other projects.",
			technologies_list: ["Vite", "React", "Tailwind", "DaisyUI"],
			repository_url: "https://github.com/MBadea21/portofolio",
			image_src: website_picture,
		},
		{
			title: "Test 1",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet viverra nibh. Sed congue diam vel ipsum bibendum, ac volutpat tellus iaculis. Donec cursus eu nisl imperdiet ultricies. Aliquam ultrices risus volutpat.",
			technologies_list: ["tech 1", "tech 2", "tech 3"],
			repository_url: null,
			image_src: null,
		},
		{
			title: "Test 2",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet viverra nibh. Sed congue diam vel ipsum bibendum, ac volutpat tellus iaculis. Donec cursus eu nisl imperdiet ultricies. Aliquam ultrices risus volutpat.",
			technologies_list: ["tech 1", "tech 2", "tech 3"],
			repository_url: null,
			image_src: null,
		},
		{
			title: "Test 3",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet viverra nibh. Sed congue diam vel ipsum bibendum, ac volutpat tellus iaculis. Donec cursus eu nisl imperdiet ultricies. Aliquam ultrices risus volutpat.",
			technologies_list: ["tech 1", "tech 2", "tech 3"],
			repository_url: null,
			image_src: null,
		},
		{
			title: "Test 4",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet viverra nibh. Sed congue diam vel ipsum bibendum, ac volutpat tellus iaculis. Donec cursus eu nisl imperdiet ultricies. Aliquam ultrices risus volutpat.",
			technologies_list: ["tech 1", "tech 2", "tech 3"],
			repository_url: null,
			image_src: null,
		},
	]

	return (
		<div className="mx-auto p-3 lg:p-0">
			<h1 className="pb-3 pl-2 text-4xl lg:p-5">Personal Projects</h1>
			<ul className="flex flex-col space-y-10 lg:items-center lg:space-y-20">
				{projects.map((project, index) => (
					<li
						key={index}
						className="bg-base-200 flex flex-col space-y-5 rounded-xl p-3 shadow-xl lg:w-4/7 lg:flex-row lg:space-x-30 lg:rounded-3xl lg:p-7"
					>
						<div className="m-0 flex max-w-full flex-col justify-between">
							<h2 className="text-xl font-semibold">{project.title}</h2>
							<p>{project.description}</p>
							<p>
								Technologies: <br /> {project.technologies_list.join(", ")}
							</p>
							{project.repository_url && (
								<button className="bg-neutral align-center flex w-fit space-x-2 rounded-lg border border-gray-500 px-2 py-1">
									<FaGithub size={20} />
									<a href={project.repository_url}>View on Github</a>
								</button>
							)}
						</div>
						{project.image_src && (
							<img src={project.image_src} className=" w-1/2 border" />
						)}
					</li>
				))}
			</ul>
		</div>
	)
}
