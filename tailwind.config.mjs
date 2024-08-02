/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				"fire-code-normal": ["Fira Code"],
				"fire-code-light": ["Fira Code light"],
				"fire-code-medium": ["Fira Code medium"],
				"fire-code-semi-bold": ["Fira Code semi-bold"],
				"fire-code-bold": ["Fira Code bold"],
				"fire-code-vf": ["Fira Code VF"],
				firacode: {
				}
			}
		},
	},
	plugins: [],
}
