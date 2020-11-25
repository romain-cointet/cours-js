<template>
  <div class="page--chapter">
    index chapter {{ this.$route.params.chapterId }} <br>
    list all courses of chapter {{ courses[this.$route.params.chapterId] }}
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    head() {
      return {
        title: 'this.course.chapter'
      }
    },
    layout: 'chapter',
    data() {
      return {
        chapterId: null,
      }
    },
    computed: {
      ...mapState({
        courses: 'courses'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>