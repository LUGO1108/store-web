/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        
		'royal-blue': {
			'50': '#eff4fe',
			'100': '#e1ecfe',
			'200': '#c9d9fc',
			'300': '#a9c0f8',
			'400': '#869df3',
			'500': '#697ceb',
			'600': '#5b64e1',
			'700': '#3e45c4',
			'800': '#353c9e',
			'900': '#31387e',
			'950': '#1d1f49',
		},
		
		
		
        
      },
    },
  },
  plugins: [],
};
