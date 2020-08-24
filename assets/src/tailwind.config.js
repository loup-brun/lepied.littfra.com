let couleursLePied = {
  forest: '#44543C',
  moutarde: '#A87141',
  saumon: '#DEADAD',
  papier: '#EEE5DE',
}
module.exports = {
  theme: {
    extend: {
      colors: {
        primaire: couleursLePied.forest,
        secondaire: couleursLePied.saumon,
        tertiaire: couleursLePied.moutarde,
        fond: couleursLePied.papier,
        noir: '#000000',
        blanc: '#ffffff',
      },
//      screens: {
//        'sm': '640px',
//        // => @media (min-width: 640px) { ... }
//
//        'md': '768px',
//        // => @media (min-width: 768px) { ... }
//
//        'lg': '1024px',
//        // => @media (min-width: 1024px) { ... }
//
//        'xl': '1600px',
//        // => @media (min-width: 1280px) { ... }
//      },
      fontSize: {
        '4xl': '2.5rem',
        '5xl': '4rem',
        '6xl': '5rem'
      },
      fontFamily: {
       'serif': ['Georgia', 'Cambria', 'serif'],
       'sans': ['fedrasans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  variants: {
    margin: ['responsive', 'last'],
    opacity: ['group-hover'],
    translate: ['group-hover'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
