let development = process.env.NODE_ENV !== 'production'

export default {
  target: 'static', // la valeur par défaut est 'server'
  mode: 'spa',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'cours-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/scss/main.scss',
    { src: "swiper/swiper.scss" }
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // https://github.com/surmon-china/vue-awesome-swiper
    { src: '~/plugins/VueAwesomeSwiper.js' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // https://github.com/Llang8/nuxt-highlightjs
    // https://highlightjs.org/
    ['nuxt-highlightjs', {
      style: 'obsidian'
    }]
  ],

  axios: {
    baseURL: development ? 'http://localhost:3000' : 'https://cours-js-mjm.netlify.app/'
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
