<template>
  <div class="comp--code-highlighter">
    <pre>
      <div class="infos"><span class="file-name">{{ fileName }}</span> <span class="language" v-if="language">({{ language }})</span></div>
      <code v-highlight :class="language">{{ code }}</code>
    </pre>
  </div>
</template>

<script>
  export default {
    props: {
      language: {
        type: String,
        default: 'javascript'
      },
      fileName: {
        type: String,
        default: ''
      },
      code: {
        type: String,
        default: 'console.log("Hello World");'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>