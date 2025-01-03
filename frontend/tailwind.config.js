// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif !important'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};