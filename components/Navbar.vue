<template>
  <header :class="['comp--navbar', home&&!showSearchCourse?'home':'']">
    <b-row align-v="center" align-h="between" class="height-full">
      <b-col cols="6" md="4">
        <nuxt-link to="/"><img :src="showSearchCourse?require(`~/assets/img/logo-black.svg`):require(`~/assets/img/logo-white.svg`)" alt="MjsM, le Javascript pour MjM"/></nuxt-link>
      </b-col>

      <b-col cols="3" md="7">
        <div class="d-none d-md-block">
          <SearchCourse :class="showSearchCourse?'show':''" compName="search-course-NAVABR"/>
        </div>
        <div class="d-block d-md-none text-right">
          <button class="btn-show-all-courses" @click="showMobileCursusMenu()"><img :src="showSearchCourse?require('~/assets/img/icon-cursus.svg'):require('~/assets/img/icon-cursus-white.svg')" alt="Show all courses"></button>
        </div>
      </b-col>
    </b-row>

    <div :class="[mobileCursusMenu?'mobile-cursus-menu show':'mobile-cursus-menu']">
      <b-row>
        <b-col class="text-right">
          <span @click="showMobileCursusMenu()">Fermer</span>
        </b-col>
      </b-row>

      <b-row class="mt-4">
        <b-col>
          <SearchCourse class="show" compName="search-course-NAVABR"/>
        </b-col>
      </b-row>
    </div>
  </header>
</template>

<script>
  export default {
    props: {
      home: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        showSearchCourse: false,
        mobileCursusMenu: false
      }
    },
    mounted() {
      //let searchCourse = document.querySelector('.comp--navbar .comp--search-course');
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        // Get the current scroll position
        const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
        // Because of momentum scrolling on mobiles, we shouldn't continue if it is less than zero
        if (currentScrollPosition > 300) {
          this.showSearchCourse = true
        } else {
          this.showSearchCourse = false
        }
      },
      showMobileCursusMenu() {
        this.mobileCursusMenu = !this.mobileCursusMenu;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>