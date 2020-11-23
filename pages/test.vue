<template>
  <div>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$nuxt)
    },
  }
</script>

<style lang="scss" scoped>

</style>