/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"
import { resolve } from "path"

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig(({ mode }) => ({
	plugins: [react(), tsconfigPaths()],
	test: {
		globals: true,
		environment: "happy-dom",
		setupFiles: ".vitest/setup",
		include: ["**/test.{ts,tsx}"],
	},
	base: mode === "development" ? "/" : "/portofolio",
	build: {
		target: "esnext",
		outDir: "dist",
		rollupOptions: {
			input: {
				// Index
				index: resolve(__dirname, "index.html"),
				// Others
				personal_projects: resolve(__dirname, "personal-projects.html"),
			},
		},
	},
}))
