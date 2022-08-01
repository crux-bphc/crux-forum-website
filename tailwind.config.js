/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		colors: {
			white: 'var(--color-white)',
			black: 'var(--color-black)',
			transparent: 'var(--color-transparent)',

			gray: {
				50: 'var(--color-gray-50)',
				100: 'var(--color-gray-100)',
				200: 'var(--color-gray-200)',
				800: 'var(--color-gray-800)',
				900: 'var(--color-gray-900)',
				accent: 'var(--color-gray-accent)',
				disabled: 'var(--color-gray-disabled)',
			},

			'teal-400': 'var(--color-teal-400)',
			'teal-500': 'var(--color-teal-500)',
			'teal-600': 'var(--color-teal-600)',

			'purple-400': 'var(--color-purple-400)',
			'purple-500': 'var(--color-purple-500)',
			'purple-600': 'var(--color-purple-600)',

			'red-400': 'var(--color-red-400)',
			'red-500': 'var(--color-red-500)',
			'red-600': 'var(--color-red-600)',

			'green-400': 'var(--color-green-400)',
			'green-500': 'var(--color-green-500)',
			'green-600': 'var(--color-green-600)',

			'blue-400': 'var(--color-blue-400)',
			'blue-500': 'var(--color-blue-500)',
			'blue-600': 'var(--color-blue-600)',
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
	],
};
