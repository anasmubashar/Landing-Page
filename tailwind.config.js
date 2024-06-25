/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        MediumGray: 'hsl(0, 0%, 41%)',
        AlmostBlack: 'hsl(0, 0%, 8%)',
        AlmostWhite: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'Epilogue': ['Epilogue', 'sans-serif'],
      },
      fontSize: {
        'responsive-lg': 'clamp(2rem, 2vw + 1rem, 3.75rem)',
        'responsive-md': 'clamp(1.5rem, 2vw + 1rem, 2.25rem)',
        'responsive-sm': 'clamp(0.7rem, 2vw + 1rem, 0.9rem)',
      },
      screens: {
        'xxs': '375px',
        'xsm': '500px',
        'sm': '640px',
        'md': '769px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1480px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  
  plugins: [],
}

