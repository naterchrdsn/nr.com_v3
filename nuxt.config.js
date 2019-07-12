export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Nate Richardson - Maker, Gamer, Breakfast Enthusiast',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Software Engineer with a passion for helping people do what they love, better.'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      }, {
        name: 'twitter:site',
        content: '@naterchrdsn'
      }, {
        name: 'twitter:title',
        content: 'Website of Nate Richardson'
      }, {
        name: 'twitter:description',
        content: 'Software Engineer with a passion for helping people do what they love, better.'
      }, {
        name: 'twitter:creator',
        content: '@naterchrdsn'
      }, {
        name: 'twitter:image',
        content: 'http://richardsonmediahouse.com/sy-misc/fulllogo.png'
      }, {
        property: 'og:title',
        content: 'Website of Nate Richardson'
      }, {
        property: 'og:url',
        content: 'https://naterichardson.com'
      }, {
        property: 'og:image',
        content: 'http://richardsonmediahouse.com/sy-misc/fulllogo.png'
      }, {
        property: 'og:description',
        content: 'Software Engineer with a passion for helping people do what they love, better.'
      }, {
        property: 'og:site_name',
        content: 'NateRichardson.com'
      },
      {
        name: 'msvalidate.01',
        content: 'D4DC91DA48E7BB91BAF7F01E1C3CF050'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    '@nuxtjs/pwa',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [{
        set: '@fortawesome/free-brands-svg-icons',
        icons: ['faTwitter', 'faGithub', 'faLinkedin']
      }, {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['faEnvelope']
      }]
    }],
  ],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
