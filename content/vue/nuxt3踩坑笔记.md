## nuxt3踩坑笔记

1. 初始化基础项目目录，使用npm和yarn，无论使用什么源都会失败，无法初始化完整项目结构。

解决办法：使用pnpm解决，我使用的镜像源是 https://registry.npmmirror.com/

+ 2. nuxt3中如何配置环境变量，并执行对应的编译命令
配置方法：
环境变量文件 .env.development
```
NODE_ENV = 'development'
VITE_APP_API_ROOT = "https://xxxx.com/"
NUXT_APP_API_ROOT="https://xxxx.com/"
```
package.json命令修改：
```
"scripts": {
    "dev": "nuxt dev --dotenv .env.development --host",
    "uat": "nuxt dev --dotenv .env.uat --host",
    "prod": "nuxt dev --dotenv .env.production --host",
    "build:dev": "nuxt build --dotenv .env.development",
    "build:uat": "nuxt build --dotenv .env.uat",
    "build:prod": "nuxt build --dotenv.production",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare"
  },
```
+ 3. nuxt3中如何处理项目跨域问题
> 如果是全栈项目，前后端不存在跨域
> 如果接口请求的是后端组使用别的语言编写的接口服务，此时需要处理跨域问题：
 1. 本地
 2. 线上：
环境变量文件 .env.development
```
NODE_ENV = 'development'
VITE_APP_API_ROOT = "https://xxxx.com/"
NUXT_APP_API_ROOT="https://xxxx.com/"
```
nuxt.config.ts
```

export default defineNuxtConfig({
  devtools: { enabled: false },
  alias: {
    "@/img": "~assets/images/",
  },
  app: {
    head: {
      title: "xxxx",
      meta: [
        {name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {name: "google", content: "notranslate" },
        {name: "keywords", content: "xxxxxxxxxxxxxxxxxx" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "xxxxx/favicon.ico" }],
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
  modules: [
    '@element-plus/nuxt',
    // '@nuxtjs/tailwindcss',
    // '@nuxtjs/composition-api',
  ],
  plugins: [
    // { src: "~/plugins/vue-icon.ts", mode: "all" },
  ]
})

```
+ 当接口请求的域名和项目适用的域名不一致时候，可以适用接口转发的方法实现跨域
+ 新增 server/middleware/index.ts文件，使用nuxt3的中间件来实现请求的转发
```
const { public: { baseURL } } = useRuntimeConfig();

export default defineEventHandler(async (event) => {
  if (event.node.req.url?.includes('/xxx')) {
    const {method, url} = event.node.req
    const options: any  = {
      responseType: 'json',
    }
    options.headers = {
      'content-type': 'application/json',
      accept: 'application/json'
    }
    options.method = method
    if (method !== 'get' && method !== 'GET') {
      options.body = JSON.stringify(await readBody(event))
    }
    const resBody = await $fetch(baseURL + url, options)
    .then(res => res)
    .catch(err => {
      return {
        code: -1,
        msg: '服务端错误',
        payload: null
      }
    })
    return resBody
  }
})
```
4. nuxt3中开发环境正常编译和访问，打包时报错
```
ERROR  RollupError: "isScriptProtocol" is not exported by "node_modules/ufo/dist/index.mjs"
```
原因： https://github.com/nuxt/nuxt/issues/23517
解决办法：删除多余的项目中未用到的包

5. nuxt3中开发环境正常编译和访问，打包后预览时报错：
```
Cannot find package '@popperjs/core' imported from
```
原因：https://github.com/nuxt/nuxt/issues/12493
解决办法：
编辑.npmrc文件
```
shamefully-hoist=true
node-linker=hoisted
public-hoist-pattern=*
```
修改package.json, 在dependencies中增加 "@popperjs/core": "npm:@sxzz/popperjs-es@^2.11.7", 删除node_modules和lock文件，重新初始化node_modules包。