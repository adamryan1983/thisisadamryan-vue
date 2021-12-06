import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  // id is required so that Pinia can connect the store to the devtools
  id: 'theme',
  state: () =>({dark:true}),
  getters: {},
  actions:{
    changeTheme() {
      this.dark = !this.dark
    }
  }
})