/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        'light-main':'rgb(222,238,245)',
        'light-main-hover':'rgb(184, 207, 218)',
        'main': 'rgb(21,142,189)',
        'main-hover' : 'rgb(17, 108, 145)',
        'second':'rgb(254,243,233)',
        'dark-second':'rgb(207, 198, 189)'
      }
    },
  },
  plugins: [],
}

