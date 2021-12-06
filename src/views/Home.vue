<template>
  <div :class="store.dark ? 'mainPageContainer' : 'mainPageContainerLight'">
    <ProfileSocial />
    <Description />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Description from '../components/Description.vue'
import ProfileSocial from '../components/ProfileSocial.vue'
import { useThemeStore } from '../stores/themeStore'

export default defineComponent({
  name: 'Home',
  components: {
    ProfileSocial,
    Description
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

<style scoped lang="scss">
@use '../constants/variables.scss' as *;

.mainPageContainer {
  display: flex;
  flex-direction: row;
  margin: 1rem 0 4rem 0;
  background-color: $primaryColor;
  &li {
    list-style: none;
  }
  &a {
    text-decoration: none;
    color: $thirdColor;
  }
  &Light {
    @extend .mainPageContainer;
    background-color: $primaryColor-light;
    &a {
      color: $thirdColor-light;
    }
  }
}

.photoSocialcontainer {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 0px;
  width: 50vw;
  margin: 4rem 0;
  & img {
    border-radius: 50%;
    width: 300px;
    max-width: 90%;
  }
}

.socialBar {
  list-style: none;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  width: 100%;
  & li {
    display: inline-flex;
    text-decoration: none;
    max-width: 20%;
    flex-wrap: wrap;
    margin: 0.3rem;
    & a {
      color: $secondaryColor;
      border: none;
      &:hover {
        color: $thirdColor;
      }
    }
  }
}
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
    color: $secondaryColor;
    &:hover {
      color: $fourthColor;
    }
  }
  & li {
    padding: 0.1rem;
  }
}

@media only screen and (max-width: 768px) {
  .mainPageContainer {
    display: flex;
    flex-direction: column;
    width: 95vw;
  }

  .descriptionContainer {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
  .photoSocialcontainer {
    display: flex;
    justify-content: center;
    align-self: center;
    width: 55vw;
    padding: 0;
    margin: 0;
  }
}
</style>
