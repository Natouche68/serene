import type { Config } from "tailwindcss";
import catppuccin from "@catppuccin/tailwindcss";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		colors: {},
		fontFamily: {
			body: ["Inter", "sans-serif"],
			display: ["Satisfy", "cursive"],
		},
	},

	plugins: [
		catppuccin({
			defaultFlavour: "macchiato",
		}),
	],
} as Config;
