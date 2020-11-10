

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
   ssr: true,

  // Target (https://go.nuxtjs.dev/config-target)
  //target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Miguel Alcala Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:100:300:400:700:900' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['~/plugins/link-resolver', '~/plugins/html-serializer'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content',
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    '@nuxtjs/toast',
    '@nuxtjs/prismic'
  ],

    prismic: {
    endpoint: "https://migblog.cdn.prismic.io/api/v2",
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },

  toast: {
    position: 'top-center',
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
  },

  axios: {
    // proxyHeaders: false
    baseURL: 'https://mennrestapimikeliam.herokuapp.com/api/'
  },

  content: {
    apiPrefix: '_content',
    dir: 'content'
  },

  // Defaults options
  tailwindcss: {
    cssPath: '@/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {
    }
  },
  generate: {
    fallback: "404.html"
  },
buildModules: ['@nuxtjs/tailwindcss'],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ["gsap", "gsap/Draggable"]
  }
}
