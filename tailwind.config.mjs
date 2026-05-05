/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand:  '#0B3D91',
        navy:   '#071E52',
        cyan:   '#0EA5E9',
        accent: '#F97316',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans Thai"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
