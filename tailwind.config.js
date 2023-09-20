/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        magenta: '#d434fe',
        'dark-purple': '#903aff',
        'navy-blue': '#150e28',
        'muted-purple': '#100B20',
      },
      backgroundImage: {
        header_image: 'url("./src/assets/virtua;.png")',
      },
    },
  },
  plugins: [],
}
