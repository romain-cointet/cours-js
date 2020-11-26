<template>
  <div class="comp--course-card">
    <b-row>
      <b-col>
        <b-badge>{{ chapter.text }}</b-badge><br>
        <h5>{{ course.text }}</h5>
        <p>{{ course.resume }}</p>
      </b-col>
    </b-row>

    <b-row class="button-area mt-4">
      <b-col>
        <nuxt-link :to="courseUrl" class="btn btn-primary">Commencer ce cours</nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    props: {
      course: {
        type: Object
      },
      chapter: {
        type: Object
      }
    },
    computed: {
      courseUrl () {
        let url = "/" + this.chapter.value + "/" + this.course.value;
        return url;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>