module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
    backgroundImage: {
      'main-banner': "url('./src/assets/bannerbackground.png')",
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
