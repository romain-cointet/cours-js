<template>
  <div :class="['comp--search-course', big?'big':'']">
    <div class="grid">
      <div id="catch-phrase">
        <span v-if="big">Choisis ton cours...</span>
        <span v-else>Mon cours</span>
      </div>

      <div id="chapter">
        <label for="chapter-select" v-show="big">Sélectionne un chapitre</label>
        <b-form-select 
          v-model="chapterSelected" 
          :options="chapterOptions" 
          id="chapter-select"></b-form-select>
      </div>

      <div id="cursus">
        <label for="cursus-select" v-show="big">Sélectionne un cours</label>
        <b-form-select 
          v-model="courseSelected" 
          :options="courseOptions[chapterSelected]" 
          id="cursus-select"></b-form-select>
      </div>

      <div id="search-button">
        <nuxt-link :to="'/'+this.chapterChoosen+'/'+this.courseChoosen">?</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    props: {
      big: {
        type: Boolean,
        default: false
      },
      chapter: {
        type: Number,
        default: 0
      },
      course: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        chapterChoosen: 0,
        courseChoosen: 0
      }
    },
    computed: {
      ...mapState({
        chapterOptions: 'chapters',
        courseOptions: 'courses',
        chapterSelected: 'chapterSelected',
        courseSelected: 'courseSelected'
      }),
      chapterSelected: {
        get: function () {
          return this.$store.state.chapterSelected;
        },
        
        set: function (chapterId) {
          this.chapterChoosen = chapterId;
          this.courseChoosen = 0;
        }
      },
      courseSelected: {
        get: function () {
          return this.$store.state.courseSelected;
        },
        set: function (courseId) {
          this.courseChoosen = courseId;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>