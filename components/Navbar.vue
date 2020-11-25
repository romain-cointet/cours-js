<template>
  <header :class="['comp--navbar', home&&!showSearchCourse?'home':'']">
    <b-row align-v="center" align-h="between" class="height-full">
      <b-col md="4">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/1">Chapter</nuxt-link>
        <nuxt-link to="/1/1">Course</nuxt-link>
      </b-col>

      <b-col md="7">
        <SearchCourse :class="showSearchCourse?'show':''"/>
      </b-col>
    </b-row>
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
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>