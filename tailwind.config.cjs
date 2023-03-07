/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        heroBackground: 'url(assets/hero_bg.svg)',
        creatorBackground: 'url(assets/creator_bg_2.svg)'
      }
    }
  },
  plugins: [require('daisyui')]
}
