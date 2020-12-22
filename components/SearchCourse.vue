<template>
  <div :class="['comp--search-course', big?'big':'']" :ref="compName">
    <div class="grid">
      <div id="catch-phrase">
        <span v-if="big">Choisis ton cours...</span>
        <span v-else>Mon cours</span>
      </div>

      <div id="chapter">
        <label for="chapter-select" v-show="big">Sélectionne un chapitre</label>
        <b-form-select 
          v-model="chapterChoosen" 
          :options="chapters" 
          id="chapter-select"></b-form-select>
      </div>

      <div id="cursus">
        <label for="cursus-select" v-show="big">Sélectionne un cours</label>
        <b-form-select 
          v-model="courseChoosen" 
          :options="courses[chapterChoosen]" 
          id="cursus-select"></b-form-select>
      </div>

      <div id="search-button">
        <nuxt-link :to="'/'+this.chapterChoosen+'/'+this.courseChoosen">
          <img src="~/assets/img/icon-search.svg" alt="Commencer ce cours">
        </nuxt-link>
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
      },
      compName: null
    },
    data() {
      return {
        chapterChoosen: 0,
        courseChoosen: 0,
      }
    },
    computed: {
      ...mapState(['chapters', 'courses', 'chapterSelected', 'courseSelected']),
      /*
      chapterChoosen: {
        get () {
          return this.chapterSelected;
        },
        set (chapterId) {
          this.courseChoosen = 0;
          return chapterId;
        }
      },
      courseChoosen: {
        get () {
          return this.courseSelected;
        },
        set (courseId) {
          return courseId;
        }
      }
      */
    },
    created() {
      this.chapterChoosen = this.chapterSelected;
      this.courseChoosen = this.courseSelected;
    }
  }
</script>

<style lang="scss" scoped>

</style>