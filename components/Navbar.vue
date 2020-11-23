<template>
  <header :class="['comp--navbar', home?'home':'']">
    <b-row align-v="center" align-h="between" class="height-full">
      <b-col md="4">
        logo
      </b-col>

      <b-col md="7" v-if="!home">
        <SearchClass />
      </b-col>
    </b-row>
  </header>
</template>

<script>
  export default {
    props: {
      home: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>