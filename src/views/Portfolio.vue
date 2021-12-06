<template>
  <div :class="store.dark ? 'portfolioContainer' : 'portfolioContainerLight'">
    <h3>portfolio</h3>
    <div>
        ===========
    </div>

    <div class="portfolioContents">
      <div v-for="item in items" :key="item.id" :class="store.dark ? 'portfolioItem' : 'portfolioItemLight'">
      <a :href="item.portURL" target="_blank">
        <img class="portfolioImage" :src='item.image' :alt="item.portTitle" />
        <div :class="store.dark ? 'portfolioTitle' : 'portfolioTitleLight'">{{item.portTitle}}</div>
      </a>
      <div :class="store.dark ? 'portfolioText' : 'portfolioTextLight'">
        <div v-html="item.blurb" class="link"></div>
      </div>
      <div class="tagBlock">
        <div v-for="tag in item.tags" :key="tag[0]" :class="store.dark ? 'portfolioTags' : 'portfolioTagsLight'">{{tag}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { useThemeStore } from '../stores/themeStore'
import { portfolioData } from '../constants/data'

interface portfolioData {
  id: number
  portTitle: string
  blurb: string
  image: string
  tags: string[]
  portURL: string
}

const store = useThemeStore();
const items = portfolioData;
const itemsLength = portfolioData.length;
const tags = items.map(item => item.tags);


</script>

<style lang="scss" scoped>
@use '../constants/variables.scss' as *;
.portfolioContainer {
  margin: 3rem 5rem;
  & h1,h2,h3,h4,h5 {
    color: $headerColor;
    font-weight: bold;
  }
  &Light {
    @extend .portfolioContainer;
    & h1,h2,h3,h4,h5 {
      color: $headerColor-light;
    }
  }
}

.portfolioContents {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: flex-start;

  margin: 2rem 0 0 2rem;
  & > * {
    width: 30%;

    height: fit-content;
  }
}

.portfolioImage {
  width: 95%;
  align-self: center;
}
.imageContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.portfolioItem {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #374151;
  border-radius: 2%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),
              0 6px 20px 0 rgb(0, 0, 0,0.5);
  margin: 2rem 1rem;
  
  &:hover{
    background: #3879c9;
    color: #FBBF24;
  }
  & > * {
    display: flex;
    flex-direction: column;
  }
  &Light {
    @extend .portfolioItem;
    background-color: $fourthColor-light;
  }
}


.portfolioText {
  color: $secondaryColor;
  padding: 1rem 0 1rem 1rem;
  width: 90%;
  &a:visited {
      color: $secondaryColor;
    }
  &Light {
    @extend .portfolioText;
    color: $secondaryColor-light;
    &a {
      color: $secondaryColor-light;
      border-bottom: 4px solid $thirdColorLighter-light;
    }
  }
}

.portfolioTitle {
  font-weight: 700;
  font-size:larger;
  color: $secondaryColor;
  padding: 1rem 0 0 2.5rem;

  &Light {
    @extend .portfolioTitle;
    color: $primaryColor-light;
    &a {
      text-decoration: none;
    }
  }
}

.tagBlock {
  display: flex;
  align-self: center;
}

.portfolioTags {
  padding: 0.25rem 0.75rem;
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  width: fit-content;
  margin: 0 0.5rem 0.5rem 0;
  color: $primaryColor;
  font-size: 0.9rem;
  background-color: rgb(216, 216, 216);
  border-radius: 9999px;
  &Light {
    @extend .portfolioTags;
    color: $primaryColor-light;
    background-color: rgb(41, 41, 41);
  }
}

@media only screen and (max-width: 1200px) {
  
  .portfolioContents {
    font-size: 0.85rem;
    justify-content: center;
    & > * {
      width: 40%;
      padding: 1rem 0.5rem;
    }
  }

  .portfolioText {
    width: 100%;
  }
  
  .portfolioTags {
    padding: 0.15rem 0.6rem
  }

}

@media only screen and (max-width: 800px) {
  
  .portfolioContents {
    font-size: 0.80rem;
    & > * {
      width: 100%;
      padding: 1rem 0.5rem;
      margin-left: 0.5rem; 
      margin-right: 0.5rem; 
    }
  }

  .portfolioTitle {
    font-size: 1.2rem;
  }
  
  .portfolioTags {
    padding: 0.1rem 0.4rem;
    font-size: 0.7rem;
  }

}
</style>