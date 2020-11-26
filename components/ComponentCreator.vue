<template>
  <div class="comp--component-creator">
    <div v-for="(c, i) in content" :key="i">
      <div v-if="c.type==='code'">
        <CodeHighlighter :language="c.language" :code="c.value" :fileName="c.fileName" />
      </div>
      <div v-else>
        <div v-if="c.type==='nuxt-link'">
          <nuxt-link :to="c.src" class="btn btn-primary cta">{{ c.value }}</nuxt-link>
        </div>

        <component v-else :is="c.type" v-html="c.value" :class="c.class?c.class:''"></component>
      </div>
    </div>
  </div>
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