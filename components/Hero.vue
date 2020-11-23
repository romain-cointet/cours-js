<template>
  <div class="comp--hero">
    <b-container class="height-full">
      <b-row class="height-full" v-if="home">
        <b-col md="10" offset-md="1" align-self="start" class="mb-4">
          <SearchCourse big />
        </b-col>
     
        <b-col md="12" align-self="end" class="pb-4">
          <b-row class="mb-4">
            <b-col md="4">
              <span v-if="!home">{{ chapter }}</span>
              <h1 v-html="title"></h1>
            </b-col>
          </b-row>

          <b-row>
            <b-col md="6">
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
        type: String
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