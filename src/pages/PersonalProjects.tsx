interface Project {
	title: string
	description: string
	technologies_list: string[] | null
	repository_url: string | null
	image_src: string | null
}

// import website_picture1 from "../assets/website_image_temp1.png"
import website_picture2 from "../assets/website_image_temp2.png"
import { FaGithub } from "react-icons/fa"

export default function PersonalProjects() {
	const projects: Project[] = [
		{
			title: "This website",
			description:
				"A website to showcase my web development skills and to provide easy access to my other projects.",
			technologies_list: ["Vite", "React", "Typescript", "Tailwind", "DaisyUI"],
			repository_url: "https://github.com/MBadea21/portofolio",
			image_src: website_picture2,
		},
		// {
		// 	title: "Test 1",
		// 	description:
		// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet viverra nibh. Sed congue diam vel ipsum bibendum, ac volutpat tellus iaculis. Donec cursus eu nisl imperdiet ultricies. Aliquam ultrices risus volutpat.",
		// 	technologies_list: ["tech 1", "tech 2", "tech 3"],
		// 	repository_url: null,
		// 	image_src: null,
		// },
		// {
		// 	title: "Test 2",
		// 	description:
		// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet viverra nibh. Sed congue diam vel ipsum bibendum, ac volutpat tellus iaculis. Donec cursus eu nisl imperdiet ultricies. Aliquam ultrices risus volutpat.",
		// 	technologies_list: ["tech 1", "tech 2", "tech 3"],
		// 	repository_url: null,
		// 	image_src: null,
		// },
		// {
		// 	title: "Test 3",
		// 	description:
		// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet viverra nibh. Sed congue diam vel ipsum bibendum, ac volutpat tellus iaculis. Donec cursus eu nisl imperdiet ultricies. Aliquam ultrices risus volutpat.",
		// 	technologies_list: ["tech 1", "tech 2", "tech 3"],
		// 	repository_url: null,
		// 	image_src: null,
		// },
		// {
		// 	title: "Test 4",
		// 	description:
		// 		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet viverra nibh. Sed congue diam vel ipsum bibendum, ac volutpat tellus iaculis. Donec cursus eu nisl imperdiet ultricies. Aliquam ultrices risus volutpat.",
		// 	technologies_list: ["tech 1", "tech 2", "tech 3"],
		// 	repository_url: null,
		// 	image_src: null,
		// },
	]

	return (
		<div className="mx-auto p-3 lg:p-0">
			<h1 className="mx-auto w-fit text-4xl lg:p-5">Personal Projects</h1>
			<ul className="flex flex-col space-y-5 lg:items-center lg:space-y-20">
				{projects.map((project, index) => (
					<li
						key={index}
						className="bg-base-200 flex h-fit origin-center flex-col justify-between space-y-10 rounded-xl p-5 shadow-xl transition-transform duration-100 ease-in-out hover:scale-105 lg:h-[300px] lg:w-4/7 lg:flex-row lg:space-x-30 lg:rounded-3xl lg:p-7"
					>
						<div className="m-0 flex flex-col space-y-5 pb-5 lg:w-2/3 lg:space-y-7 lg:pb-0">
							<h2 className="text-2xl font-semibold">{project.title}</h2>
							<p>{project.description}</p>
							{project.technologies_list && (
								<span className="space-x-1">
									Technologies <br />
									{project.technologies_list.map((tech) => (
										<p
											key={tech}
											className="inline-block rounded-sm bg-gray-700 px-1"
										>
											{tech}
										</p>
									))}
								</span>
							)}
							{project.repository_url && (
								<button className="bg-neutral align-center flex w-fit space-x-2 rounded-lg border border-gray-500 px-2 py-1">
									<FaGithub size={20} className="my-auto" />
									<a href={project.repository_url}>View on Github</a>
								</button>
							)}
						</div>
						<div className="place-items-center lg:w-full">
							{project.image_src && (
								<img
									src={project.image_src}
									className="mx-auto object-scale-down"
								/>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}
