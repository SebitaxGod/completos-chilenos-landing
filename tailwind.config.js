/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'completo': {
          'palta': '#4ADE80',     // Verde palta
          'tomate': '#EF4444',    // Rojo tomate
          'mayo': '#FFFFFF',      // Blanco mayonesa
          'mostaza': '#EAB308',   // Amarillo mostaza
          'pan': '#F59E0B',       // Amarillo pan
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
