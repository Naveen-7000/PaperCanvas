/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors : {
      background : '#000',
      shadow1: '0px 7px 14px rgba(0,0,0,.05), 0px 0px 3.12703px rgba(0,0,.0798), 0px 0px .931014px rgba(0,0,.1702)',
      shadow2 : '0 0 0 1px #4a47b1',
      border1: '#BBBBBB',
      border2 : '#A1A1A1',
      text1 : '#fff',
      text2 : '#A1A1A1',
      hover : 'RGB(207, 207, 207,0.9)'
    }
  },
  plugins: [],
}
