// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  alias: {
    "@/img": "~assets/images/",
    pinia: process.env.NODE_ENV === 'production' ? '/node_modules/pinia/dist/pinia.mjs' : '/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs',
  },
  app: {
    head: {
      title: "VUE-NUXT3-TEMPLATE",
      meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {name: "google", content: "notranslate" },
        {name: "keywords", content: "vue3 and nuxt3 project" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
      script: [],
      // css: ["~/assets/styles/index.less"],
      // buildModules: ["nuxt-windicss", "@pinia/nuxt"],
    }
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_APP_API_ROOT
    },
  },
  devServer: {
    port: 8080,
    url: "http://localhost:8080",
  },
  nitro: {
    devProxy: {
      // "/api": {
      //   target: "http://localhost:8081", // 这里是接口地址
      //   changeOrigin: true,
      //   prependPath: true,
      // },
    },
    // 该配置用于服务端请求转发
    // routeRules: {
    //   '/web/**': {
    //     proxy: 'https://dg-api-dev.shouyinongye.com//**'
    //   }
    // }
  },
  css: ["assets/styles/index.less"],
  vite: {
    css: {
      preprocessorOptions: {
        // less: {
        //   additionalData: '@use "@/assets/styles/index.less" as *;'
        // }
      }
    }
  },
  imports: {
    dirs: [
      "stores"
    ]
  },
  modules: [
    '@element-plus/nuxt',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: 'github-dark',
    }
  },
  plugins: [
  ]
})
