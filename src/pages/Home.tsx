export default function Home() {
	return (
		<div className="bg-base-200 mx-auto flex max-w-fit flex-col space-y-10 rounded-3xl lg:mt-[100px] lg:p-10">
			<div className="flex flex-col space-y-3">
				<h1 className="bold text-5xl">Multidisciplinary developer</h1>
				<p className="text-2xl">
					Skilled in Web Development, Managing Linux Systems, IoT integration,
					and Creating or Editing Digital Media
				</p>
			</div>
			<div className="space-y-3">
				<h2 className="text-2xl">Skills and know-how:</h2>
				<ul className="space-y-2 text-xl">
					<li>Programming languages: Javascript, Typescript, Python</li>
					<li>
						System Administration: VPS Management, Linux Shell, Basic
						Networking, Docker Compose
					</li>
					<li>Web Technologies: React, Next, Vite, Tailwind</li>
					<li>IoT and Web: MQTT, HTTPS</li>
					<li>Databases: MySQL, SQLite, Prometheus</li>
					<li>Game Engines: Godot, Unity</li>
					<li>Image Editing: Photoshop, Gimp</li>
					<li>3D Modelling and Animation: Blender</li>
				</ul>
			</div>
		</div>
	)
}
