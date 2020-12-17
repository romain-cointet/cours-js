<template>
  <div class="comp--component-creator">
    <div v-for="(c, i) in content" :key="i">
        <CodeHighlighter :language="c.language" :code="c.value" :fileName="c.fileName" v-if="c.type==='code'"/>
        <nuxt-link :to="c.src" class="btn btn-primary cta" v-else-if="c.type==='nuxt-link'">{{ c.value }}</nuxt-link>
        <img :src="require(`~/assets/img/${c.src}`)" :class="c.class?c.class:''" :alt="c.alt" v-else-if="c.type==='img'"/>
        <a :href="c.href" :class="c.class" v-else-if="c.type==='a'">{{ c.value }}</a>
        <component v-else :is="c.type" v-html="c.value" :class="c.class?c.class:''"></component>
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