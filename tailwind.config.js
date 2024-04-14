import animate from 'tailwindcss-animate'

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: ['./theme.config.tsx', './pages/**/*.{mdx,tsx}', './components/**/*.{mdx,tsx}'],
  plugins: [animate]
}

export default config
