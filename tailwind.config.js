/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1A374D',
          secondary: '#F7F8C6',
          accent: '#FF6F61',
          interactive: '#118AB2',
          neutral: {
          light: '#F2F2F2',
          DEFAULT: '#FFFFFF',
          dark: '#333333',
          },
        },
      },
    },
    plugins: [],
  };
  