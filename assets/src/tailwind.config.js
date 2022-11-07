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

  // automne 2021
  automne2021: {
    moutarde: '#F8E65D',
    canari: '#F8F4D0',
    ketchup: '#E58C93',
    eauDeMer: '#B3CEE2',
    marine: '#313564',
    carbone: '#232C33',
  },

  // hiver 2022
  hiver2022: {
    vertmer: '#00664f',
    charbon: '#000000',
    canari: '#F8F4D0',
    ketchup: '#E58C93',
    eauDeMer: '#B3CEE2',
    marine: '#313564',
    carbone: '#232C33',
  },

  // printemps 2022
  printemps2022: {
    bleulac: '#7D94C8',
    charbon: '#000000',
    canarifluo: '#DEFF98',
    lila: '#CDB7CE',
    carbone: '#232C33',
  },

  // automne 2022
  automne2022: {
    pastelrita: '#F0999F',
    noir: '#000000',
    canarifluo: '#DEFF98',
    aciermarine: '#303C4A',
    turquoise: '#76A99D',
    mauve: '#A38BBD',
    ocre: '#CE422B',
    terracotta: '#E79C7C',
    creme: '#FAFDFC',
  },
}
module.exports = {
  theme: {
    extend: {
      colors: {
        // printemps 2022
        primaire: couleursLePied.automne2022.noir,
        secondaire: couleursLePied.automne2022.aciermarine,
        tertiaire: couleursLePied.automne2022.pastelrita,
        quaternaire: couleursLePied.automne2022.canarifluo,


        fond: couleursLePied.automne2022.pastelrita,
        noir: couleursLePied.automne2022.noir,
        blanc: couleursLePied.automne2022.pastelrita,
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
        '4xl': ['2.5rem', '2.85rem'],
        '5xl': ['4rem', '4.5rem'],
        '6xl': ['5rem', '5.65rem']
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
