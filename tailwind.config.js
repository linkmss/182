/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,vue,ts}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121B22',
        dark2: '#181C28',
        dark3: '#1A222D',
        dark4: '#1F2F3D',
        dark5: '#13252F',
        green: '#02C055',
      },
      borderRadius: {
        big: '20px',
        normal: '10px',
      },
    },
  },
  plugins: [],
}
