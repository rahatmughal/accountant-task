// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    spacing: {
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },
    extend: {
      backgroundColor: {},
      backgroundImage: {
        'hero': 'url(./Assets/bg-hero.png);',
        'service-banner': 'url(./Assets/services-banner.png);',
        'sector-banner': 'url(./Assets/sector-banner.png);'
      },
      spacing: {
        '10': '4rem',
        '12': '5rem',
        '15': '6rem',
      },
    },

  },
  plugins: [],
}
