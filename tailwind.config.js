module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widerest: '.5em',
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/images/bg-desktop-light.jpg')",
        'footer-texture': "url('/src/images/bg-desktop-dark.jpg')",
      }
    },
  },
  plugins: [],
}
