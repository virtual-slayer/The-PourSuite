/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: '#6B1A2A',
        gold: '#B8962E',
        'gold-light': '#D4AF5A',
        cream: '#F9F5EF',
        charcoal: '#2C2A27',
        dark: '#1C1C1C',
      },
      fontFamily: {
        serif: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
