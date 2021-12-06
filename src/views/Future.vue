<script lang="ts">
import { defineComponent } from 'vue'
import { useThemeStore } from '../stores/themeStore'

export default defineComponent({

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
  <div :class="store.dark ? 'futureContainer' : 'futureContainerLight'">
    <div id='blogSection'>
      <h3>
        <span>future projects/ideas/goals</span>
      </h3>
      =================================
      <div class="hashTitle">
        <span>### Projects ###</span>
      </div>
      <div>
        Here are some projects I want to make:
        <ul>
          <li>- iOS app</li>
          <li>- Website with a backend written in python/django</li>
          <li>
            - A running app that tracks your mileage and recommends you new
            sneakers
          </li>
          <li>
            - A moose tracker app for highway driving (currently being
            built)
          </li>
          <li>
            - An uber style app named 'Handy Dandy' that allows people to
            hire others for small tasks such as painting a fence, putting
            together a swing set, fix a pipe in your basement, assemble a
            bookshelf, etc.
          </li>
        </ul>
      </div>
      <div class="hashTitle">
        <span>### Languages ###</span>
      </div>
      <div>
        Here are some programming languages/frameworks I am
        <span class="textPink">currently learning</span>/
        <span class="textGreen">want to learn</span>:
        <ul>
          <li class="textPink">- Java</li>
          <li class="textPink">- Flutter/Dart</li>
          <li class="textPink">- Swift/SwiftUI</li>
          <li class="textGreen">- MongoDB</li>
          <li class="textGreen">
            - Design/UI fundamentals (...I know, not a programming
            language!)
          </li>
          <li class="textGreen">
            - ExpressJS/NodeJS for backend
          </li>
        </ul>
      </div>
      <div class="hashTitle">
        <span>### Goals ###</span>
      </div>
      <div>
        Here are my long-term goals:
        <ul>
          <li>
            - Offer tutorials/lessons to others looking to lean to program
          </li>
          <li>- Have my own business offering web design/branded apps</li>
          <li>
            - Enroll in Apple Developer program and release my apps to the
            AppStore
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../constants/variables.scss' as *;
.futureContainer {
  display: flex;
  padding: 3rem 8rem;
  color: $secondaryColor;
  & ul {
  list-style: none;
  }
  & h1, h2, h3, h4, h5 {
    color: $headerColor;
    font-weight: bold;
    padding: 1rem 0 0.5rem 0;
  }
  & a {
    color: $secondaryColor;
    &:hover {
      color: $fourthColor;
    }
  }
  & li {
    padding: 0.1rem;
  }
  &Light {
    @extend .futureContainer;
    color: $primaryColor;
    & h1, h2, h3, h4, h5 {
      color: $secondaryColor-light;
    }
    &a {
      color: $secondaryColor-light;
      &:hover {
        color: $fourthColor-light;
      }
    }
  }
}

.textPink {
  color: #F9A8D4;
}
.textGreen {
  color: #6EE7B7;
}

.hashTitle {
  padding: 2rem 0 1rem 0;
  color: #60A5FA;
}

@media only screen and (max-width: 960px) {
  .futureContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95vw;
  }
}
</style>