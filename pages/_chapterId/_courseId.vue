<template>
  <div class="page--course" v-if="course">
    <Navbar home />
    <article>
      <Hero 
        :chapter="course.head.chapter" 
        :title="course.head.title"
        :subtitle="course.head.resume"
        :showSearchCourse="false"  />

      <b-container class="mb-8">
        <Intro :content="course.intro" />
        <Content :content="course.content" />
      </b-container>

      <NextCourses id="next-courses" :courseRead="true"/>

    </article>
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: 'this.course.title'
      }
    },
    data() {
      return {
        course: null
      }
    },
    async fetch() {
      await this.$store.dispatch('loadCursus')

      let url = '/data/courses/'+this.$route.params.chapterId+'-'+this.$route.params.courseId+'.json';
      let response = await this.$axios.get(url);
      let course = response.data;
      this.course = course;
    },
    mounted() {
      this.$store.dispatch('loadCurrentChapter', this.$route.params.chapterId)
      this.$store.dispatch('loadCurrentCourse', this.$route.params.courseId)
    }
  }
</script>

<style lang="scss" scoped>

</style>