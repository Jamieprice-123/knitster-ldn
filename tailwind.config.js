/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#fc1048',
          'dark-red': '#90172a',
        },
        background: {
          'cool-blue': '#c2d7e1',
        },
        accent: {
          'powder-green': '#cfdacc',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['50pt', { lineHeight: '60pt', letterSpacing: '-0.02em' }],
        'h2': ['50pt', { lineHeight: '32pt', letterSpacing: '-0.02em' }],
        'h3': ['12pt', { lineHeight: '15pt', letterSpacing: '0' }],
        'body': ['9pt', { lineHeight: '13pt', letterSpacing: '0.01em' }],
        'sub': ['7pt', { lineHeight: '11pt', letterSpacing: '0.02em' }],
      },
    },
  },
  plugins: [],
}