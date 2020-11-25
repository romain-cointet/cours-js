<template>
  <section class="comp--intro">
    <b-row>
      <b-col md="6" class="content">
        <ComponentCreator :content="content.left"/>
      </b-col>

      <b-col md="6" offset-md="1">
        
      </b-col>
    </b-row>
  </section>
</template>

<script>
  export default {
    props: {
      content: {
        type: Object
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>