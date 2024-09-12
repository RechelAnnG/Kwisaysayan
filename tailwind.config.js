/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-red': '#DC3C3C',
        
        'custom-gray': '#625C5C',
        
        'custom-grey': '#F0EFEF',

        'custom-yellow': '#E6B325',

        'custom-brownnav': '#603F26',

        'custom-brownbg': '#F2E8C6',
        
        'custom-brownbglight': '#A47E3B',

        'custom-green': '#88A67A',
      },

      boxShadow: {
        'custom-shadow': '0 4px 10px rgba(0, 0, 0, 0.3)', // Example shadow
      },

      borderColor: {
        'custom-yellow': '#E6B325',
      },
      ringColor: {
        'custom-yellow': '#E6B325',
      },
      ringWidth: {
        '2': '2px',
      },
    },
  },
  plugins: [],
}

