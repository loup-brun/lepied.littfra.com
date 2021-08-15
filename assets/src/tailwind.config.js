let couleursLePied = {
  // hiver 2020
  hiver2020: {
    forest: '#44543C',
    moutarde: '#A87141',
    saumon: '#DEADAD',
    papier: '#EEE5DE',
  },

  // printemps
  printemps2020: {
    forest: '#406559',
    delave: '#7F928B',
    acier: '#6A828E',
    nuage: '#CCCDCF',
    aluminium: '#D4D5D9',
  },

  // automne
  automne2020: {
    aluminium: '#EBE6E3',
    peche: '#EFD1AF',
    orange: '#DB8927',
    ocre: '#B25A35',
    mousse: '#C1D9D6v',
    gris: '#BABEB1',
    carbone: '#232C33',
  },

  // hiver 2021
  hiver2021: {
    bleuBebe: '#AAC3E6',
    jaunePale: '#F6F099',
    bleuFonce: '#4B73C4',
    neige: '#FFFFFF',
  },

  // printemps 2021
  printemps2021: {
    moutarde: '#F8E626',
    ketchup: '#e16b77',
    cornichon: '#00664f',
    eauDeMer: '#2fad76',
  },
}
module.exports = {
  theme: {
    extend: {
      colors: {
        // hiver 2020
        primaire: couleursLePied.printemps2021.moutarde,
        secondaire: couleursLePied.printemps2021.cornichon,
        tertiaire: couleursLePied.printemps2021.ketchup,
        quaternaire: couleursLePied.printemps2021.eauDeMer,
        
        
        fond: couleursLePied.printemps2021.eauDeMer,
        noir: couleursLePied.automne2020.carbone,
        blanc: couleursLePied.printemps2021.eauDeMer,
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
    textColor: ['hover', 'focus', 'active', 'group-hover'],
    border: ['hover', 'group-hover'],
    opacity: ['group-hover'],
    translate: ['group-hover'],
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
