module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        dm_sans: ['DM Sans', 'sans-serif'],
        dm_serif: ['DM Serif Display', 'serif'],
      },
      colors: {
        moonwhite: '#FFF9F2',
        moonwhite_dark: '#f8efe5',
        moonwhite_hover: '#f5e6d6',
        moonblack: '#231D4F',
        g_blue: '#108dc7',
        g_orange: '#ef8e38',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
