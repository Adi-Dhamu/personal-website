/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: '#ffffff',
        surface: '#f4f4f6',
        ink: '#0a0a0a',
        muted: '#525866',
        accent: '#d92b21',
        darkband: '#0d0e11',
      },
      fontFamily: {
        serif: ['Literata', 'Georgia', 'serif'],
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
