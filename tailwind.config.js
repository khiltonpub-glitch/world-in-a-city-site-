/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#0B0B0B',
        'pitch-black': '#111111',
        'grass-green': '#0F2A25',
        'gold': '#C6A85B',
        'chalk-white': '#EDEDED',
        'warm-gray': '#8A8478',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'cinematic': '0.15em',
        'wide': '0.1em',
      },
    },
  },
  plugins: [],
}
