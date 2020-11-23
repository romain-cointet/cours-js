<template>
  <div class="comp--course-card">
    <b-row>
      <b-col>
        <b-badge>{{ chapter.title }}</b-badge><br>
        <h5>{{ course.title }}</h5>
        <p>{{ course.resume }}</p>
      </b-col>
    </b-row>

    <b-row class="button-area">
      <b-col>
        <nuxt-link to="" class="btn btn-primary">Commencer ce cours</nuxt-link>
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
    }
  }
</script>

<style lang="scss" scoped>

</style>