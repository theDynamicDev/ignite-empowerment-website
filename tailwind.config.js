/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      backgroundImage: {
        'forms-background': "url('../../public/images/wide_flame_bg_black.png')",
        'transparent-flame': "url('../../public/images/trans-flame-1.png')",
        'trans-flame-h-1': "url('../../public/images/trans-flame-h-2.png')",
        'trans-flame-h-mobile': "url('../../public/images/trans-flame-h-mobile.png')",
      },
      colors: {
        cyanTheme: '#00FFFF',
        darkGrayTheme: '#A9A9A9',
        greenTheme: '#00A300',
        orangeTheme: '#F97806',
        logo: '#edebeb',
        bg1: '#4c05b0',
      },
      boxShadow: {
        'outline-blue': '0 2px 4px 0 rgba(0, 0, 0, 0.1), 0 0 0 3px rgba(0, 123, 255, 0.25)',
      },
    },

    variants: {
      extend: {
        boxShadow: ['focus'],
      },
    },
  },
  plugins: [require('@xpd/tailwind-3dtransforms')],
}
