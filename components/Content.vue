<template>
  <section class="comp--content">
    <b-row class="justify-content-md-center">
      <b-col md="8" class="content">
        <ComponentCreator :content="content"/>
      </b-col>
    </b-row>
  </section>
</template>

<script>
  export default {
    props: {
      content: {
        type: Array
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>