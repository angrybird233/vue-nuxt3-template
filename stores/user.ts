import { defineStore } from 'pinia';
export const useUser = defineStore('user', {
  state: () => ({
    isLogin: false
  })
})