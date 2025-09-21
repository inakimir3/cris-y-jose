/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#FBF8F1',
        secondary: '#C48F72',
        accent: '#787878',
      },
      fontFamily: {
        inter: ['Inter Variable'],
        garamond: ['EB Garamond Variable'],
        cormorant: ['Cormorant Garamond Variable'],
        infant: ['Cormorant Infant Variable'],
      },
    },
  },
  plugins: [],
}

