<script setup lang="ts">
import { useThemeStore } from '../stores/themeStore'
  
const store = useThemeStore()
    
</script>

<template>
 <div :class="store.dark ? 'descriptionContainer' : 'descriptionContainerLight'">
      <div :class="store.dark ? 'container' : 'containerLight'">
        <h3>
          this is <strong>adam ryan</strong>
        </h3>
        <div>======================</div>
        <div>
          <h4># Software/Web Developer #</h4>
          <div>
            Specializing in:
            <ul class="listing">
              <li>- React/NextJS Framework</li>
              <li>- SASS/Tailwind</li>
              <li>- Flutter/Dart</li>
              <li>- Vue3</li>
              <li>- Flutter/Dart</li>
              <li>- Svelte</li>
              <li>- Swift/SwiftUI</li>
            </ul>
          </div>
          <h4># Utilities/Apps I use #</h4>
          <ul class="listing">
            <li>- Github</li>
            <li>- VSCode</li>
            <li>- MacOS</li>
            <li>- iTerm</li>
            <li>- xCode</li>
            <li>- Jetbrains IntelliJ</li>
          </ul>
          <h4># Projects I've Created #</h4>
          <ul class="listing">
            <li>
              -
              <a href='https://downhomehvac.ca' target='_blank'>
                Downhome HVAC website
              </a>
            </li>
            <li>
              -
              <a href='https://apps.apple.com/tt/app/is-she-runnin/id1571057949' target='_blank'>
                Is She Runnin' Ferry Tracker iOS App
              </a>
            </li>
            <li>
              -
              <a href='https://apps.apple.com/ca/app/bimha/id1591746695?platform=iphone' target='_blank'>
                Bell Island Minor Hockey iOS app
              </a>
            </li>
            <li>
              -
              <a href='https://github.com/adamryan1983/mooose' target='_blank'>
                'Mooose', a moose tracker app for android/ios (in development)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

</template>

<style scoped lang="scss">
@use '../constants/variables.scss' as *;

.descriptionContainer {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  width: 80vw;
  margin-left: 8rem;
  justify-content: flex-start;
  & h1, h2, h3, h4, h5 {
    color: $fifthColor;
    font-weight: 400;
    padding: 1.5rem 0 0.5rem 0;
  }
  & a {
    color: $fourthColor;
    text-decoration: none;
  }
  a:hover {
    color: $thirdColor;
  }
  & li {
    padding: 0.1rem;
  }
  &Light {
    @extend .descriptionContainer;
    & h1, h2, h3, h4, h5 {
      color: $fourthColor-light;
    }
    &a {
      color: $secondaryColor;
    }
    &a:hover {
      color: $fourthColor-light;
    }
  }
}

.listing {
  list-style-type: none;
  padding: 0;
}

@media only screen and (max-width: 768px) {

  .descriptionContainer {
    width: 95vw;
    display: flex;
    flex-wrap: nowrap;
    margin: 0;
    justify-content: center;
    align-items: center;
    & li {
      text-decoration: none;
    }
    &Light {
      background-color: $primaryColor-light;
      @extend .descriptionContainer;
      & h1, h2, h3, h4, h5 {
        color: $fourthColor-light;
      }
      &a {
        color: $secondaryColor;
      }
      &a:hover {
        color: $fourthColor-light;
      }
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &Light {
      @extend .container;
      background-color: $primaryColor-light;
    }
  }
}
</style>