<script setup lang="ts">
import { useThemeStore } from '../stores/themeStore'

const store = useThemeStore()
</script>

<template>
   <div :class="store.dark ? 'footerContainer' : 'footerContainerLight'">
      Copyright Adam Ryan {{new Date().getFullYear()}}
    </div>
</template>


<style lang="scss" scoped>
@use '../constants/variables.scss' as *;

.footerContainer {
  display: flex;
  background-color: $primaryColor;
  color: $secondaryColor;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
  &Light {
    @extend .footerContainer;
    background-color: $primaryColor-light;
    color: $fourthColor-light;
  }
}
</style>
