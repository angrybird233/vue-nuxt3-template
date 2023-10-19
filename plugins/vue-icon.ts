import * as ElementPlusIcons from '@element-plus/icons-vue'


export default defineNuxtPlugin((nuxtApp) => {
  Object.entries(ElementPlusIcons).forEach(([name, component]) => {
    nuxtApp.vueApp.component(name, component)
  })
});