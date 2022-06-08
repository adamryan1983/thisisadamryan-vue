<script lang="ts">
import Menu from './components/Menu.vue'
import MobileMenu from './components/NavBarMobile.vue'
import Footer from './components/Footer.vue'
import { defineComponent } from 'vue'
import { useThemeStore } from './stores/themeStore'

export default defineComponent({
  name: 'App',
  components: {
    Menu,
    MobileMenu,
    Footer
  },
  setup () {
    const store = useThemeStore()
    store.dark
    return {
      store
    }
  },
})
</script>

<template> 
  <div :class="store.dark ? 'container' : 'containerLight'">
    <Menu />
    <MobileMenu />
    <main>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use './constants/variables.scss' as *;
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,400&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  height: 100%;
  width: 100vw;
  min-height: 100vh;
  background-color: $primaryColor;
  color: $secondaryColor;
  &Light {
    @extend .container;
    background-color: $primaryColor-light;
    color: $secondaryColor-light;
  }
}
</style>
