<template>
  <div class="page--course" v-if="course">
    <article>
      <Hero 
        :chapter="course.head.chapter" 
        :title="course.head.title"
        :subtitle="course.head.resume" />

      <b-container>
        <Intro :content="course.intro" />
        <Content :content="course.content" />
      </b-container>

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
      let url = 'data/courses/'+this.$route.params.chapterId+'-'+this.$route.params.courseId+'.json';
      let response = await this.$axios.get(url);
      let course = response.data;
      this.course = course;
    }
  }
</script>

<style lang="scss" scoped>

</style>