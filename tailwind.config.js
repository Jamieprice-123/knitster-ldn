/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#fc1048',
        'primary-dark-red': '#8b1538',
        'background-cool-blue': '#FADADD',
        'accent-powder-green': '#FADADD',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        // More consistent font sizing system
        'h1': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '300' }],
        'h2': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '300' }],
        'h3': ['18px', { lineHeight: '24px', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '24px', letterSpacing: '0.01em', fontWeight: '400' }],
        'sub': ['14px', { lineHeight: '20px', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
}
