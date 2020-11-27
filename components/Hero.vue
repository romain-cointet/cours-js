<template>
  <div class="comp--hero">
    <b-container class="height-full">
      <b-row class="height-full">
        <b-col md="10" offset-md="1" align-self="start" class="mb-4">
          <SearchCourse big compName="search-course-HERO"/>
        </b-col>
     
        <b-col md="12" align-self="end" class="pb-4">
          <b-row class="mb-4">
            <b-col md="4">
              <nuxt-link :to="'/'+chapter.id" v-if="!home" class="badge mb-4">{{ chapter.value }}</nuxt-link>
              <h1 v-html="title"></h1>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="6" class="mb-4">
              <h2 v-html="subtitle"></h2>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    props: {
      home: {
        type: Boolean,
        default: false
      },
      chapter: {
        type: Object
      },
      title: {
        type: String
      },
      subtitle: {
        type: String
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>