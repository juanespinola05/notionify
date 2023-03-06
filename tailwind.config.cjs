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
        creatorBackground: 'url(assets/creator_bg.svg)'
      }
    }
  },
  plugins: [require('daisyui')]
}
