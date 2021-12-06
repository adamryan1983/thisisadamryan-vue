<script>
import { LightBulbIcon } from '@heroicons/vue/solid'
import { defineComponent } from 'vue'
import { useThemeStore } from '../stores/themeStore'


export default defineComponent({
  name: 'Menu',
  components: { LightBulbIcon },
  setup () {
    const store = useThemeStore()
    store.dark
    return {
      changeTheme:store.changeTheme, store
    }
  },
})

</script>

<template>
  <header class="header">
    <router-link
      to="/"
      :exact-active-class="store.dark ? 'exact-active' : 'exact-activeLight'" :class="store.dark ? 'menuItem': 'menuItemLight'">
      this is adam ryan
    </router-link>
    <div class="seperator"> - </div>            
    <router-link
      to="/portfolio"
      :class="store.dark ? 'menuItem': 'menuItemLight'" exact-active-class="exact-active">
      portfolio
    </router-link>
    <div class="seperator"> - </div>
    <router-link
      to="/resume"
      :class="store.dark ? 'menuItem': 'menuItemLight'" exact exact-active-class="exact-active">
      resume
    </router-link>
    <div class="seperator"> - </div>
    <router-link
      to="/future"
      :class="store.dark ? 'menuItem': 'menuItemLight'" exact exact-active-class="exact-active">
      future
    </router-link>
    <div class="seperator"> - </div>
    <router-link
      to="/contact"
      :class="store.dark ? 'menuItem': 'menuItemLight'" exact exact-active-class="exact-active">
      contact
    </router-link>
    <div class="seperator"> - </div>
    <div class="menuItemSwitch" :class="store.dark ? 'menuItemSwitch': 'menuItemSwitchLight'" exact exact-active-class="exact-active" @click='store.changeTheme'>
      <LightBulbIcon class="icon"/>
      Dark/Light
    </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../constants/variables.scss' as *;

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem 0;
}
.menuItem {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.75rem;
  color: $fourthColor;
  font-size: large;
  font-weight: 500;
  text-decoration: none;
  transition:all 0.25s ease-in-out;
  &Light {
    @extend .menuItem;
    color: $fourthColor-light;
    &:hover {
      background-color: $thirdColor-light;
    }
  }
  &:hover {
    background-color: $thirdColor;
  }
}

.menuItemSwitch {
  display: flex;
  justify-content: center;
  border: 2px solid $secondaryColor;
  border-radius: 500px;
  align-items: center;
  padding: 0 0.5rem;
  color: $secondaryColor;
  font-size: large;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
    transition:all 0.25s ease-in-out;
  &:hover {
    color: $thirdColor;
  }
  &Light{
    @extend .menuItemSwitch;
    color: $secondaryColor-light;
    border: 2px solid $secondaryColor-light;
    &:hover {
      color: $thirdColor-light;
    }
  }
}

.seperator {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0rem 0.75rem;
  font-weight: 600;
}
.exact-active {
  background-color: $secondaryColor;
  &Light {
    background-color: $secondaryColor-light;
  }
};
  
.icon {
  height: 2rem;
  width: 2rem;
  margin: 0.5rem 0rem;
}

@media only screen and (max-width: 950px) {
  .header {display: none}
}
</style>