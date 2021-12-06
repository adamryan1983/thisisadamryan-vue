
<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../stores/themeStore'

const toggled = ref(false)
const store = useThemeStore()
const toggleMenu = () => {
  toggled.value = !toggled.value
}
</script>


<template>
  <div :class="store.dark ? 'menuMobile' : 'menuMobileLight'">
     <button :class="!toggled ? 'cool' : 'opened'" :onClick="toggleMenu" aria-label="Main Menu">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <path class="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
        <path class="line line2" d="M 20,50 H 80" />
        <path class="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
      </svg>
    </button>
    <div :class="toggled ? 'isVisible' : 'notVisible'">
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
      <div class="menuItemSwitch" :class="store.dark ? 'menuItemSwitch': 'menuItemSwitchLight'" exact exact-active-class="exact-active" @click='store.changeTheme'>
        <LightBulbIcon class="icon"/>
        Dark/Light
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../constants/variables.scss' as *;


.isVisible {
  display: block;
}
.notVisible {
  display: none;
}
.menuMobile {
  display: none;
  justify-content: center;
  font-size: 1.1rem;
  background-color: $primaryColor;
    &a {
      text-decoration: none;
      color: $fourthColor;
      border: none;
      &:hover {
        background-color: $thirdColor;
      }
    }
    &Light {
      @extend .menuMobile;
      background-color: $primaryColor-light;
      &a {
        color: $fourthColor-light;
        &:hover {
          background-color: $thirdColor-light;
        }
      }
    }
}

.icon {
  height: 2rem;
  width: 2rem;
  margin: 0.5rem 0rem;
}

.mobileListOpen {
  display: block;
  margin-left: 2rem;
  & li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 0.2rem 0 ;
  }

}
.mobileListClosed {
  display: none;
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
  margin: 1rem 0;
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

//hamburger styles
    /*
    *Cool effect!
    */
 .cool {
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      padding: 0;
    }
    .opened {
      background-color: transparent;
      border: none;
      cursor: pointer;
      display: flex;
      padding: 0;
    }
    .line {
      fill: none;
      stroke: black;
      stroke-width: 5;
      transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    }
    .line1 {
      stroke-dasharray: 60 207;
      stroke-width: 5;
    }
    .line2 {
      stroke-dasharray: 60 60;
      stroke-width: 5;
    }
    .line3 {
      stroke-dasharray: 60 207;
      stroke-width: 5;
    }
    .opened .line1 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 5;
    }
    .opened .line2 {
      stroke-dasharray: 1 60;
      stroke-dashoffset: -30;
      stroke-width: 5;
    }
    .opened .line3 {
      stroke-dasharray: 90 207;
      stroke-dashoffset: -134;
      stroke-width: 5;
    }


@media only screen and (max-width: 950px) {
  .menuMobile {
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: center;
    padding-bottom: 1.5rem;
  }
}
</style>