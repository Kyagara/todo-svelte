/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',

	theme: {
		extend: {}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')],

	daisyui: {
		themes: ['light', 'dark'],
		logs: true
	}
};

module.exports = config;
