/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#13161C",
        "secondary":"#0BEB89",
      },
      fontFamily:{
				'mono': ['"Space Mono"', ...defaultTheme.fontFamily.mono],
			},
    },
  },
  plugins: [],
}

