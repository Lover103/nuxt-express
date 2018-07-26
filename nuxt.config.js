module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '默认共用title',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { 'http-equiv': 'cache-control', content: 'no-cache' },
      { 'http-equiv': 'expires', content: '0' },
      { content: 'telephone=no', name: 'format-detection' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/css/main.css' }
    // { src: 'iview/dist/styles/iview.css' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios', 'iview'],

    // analyze: true,

    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })
      }
    }
  },
  serverMiddleware: [
    // API middleware
    '~/api/index.js'
  ],
  plugins: [
    { src: '~/plugins/iview.js', ssr: true }
  ]
}
