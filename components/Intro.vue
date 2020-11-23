<template>
  <section class="comp--resume">
    <b-row>
      <b-col md="6" class="content">
        <component v-for="(c, i) in content" :key="i" :is="c.type" v-html="c.value"></component>
        <nuxt-link :to="link.src" class="btn btn-primary cta" v-if="link.type==='internal'">{{ link.value }}</nuxt-link>
        <a :href="link.src" class="btn btn-primary cta" v-if="link.type==='scroller'">{{ link.value }}</a>
        <a :href="link.src" target="_blank" class="btn btn-primary cta" v-if="link.type==='external'">{{ link.value }}</a>
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
        type: Array
      },
      link: {
        type: Object
      }
    },
    mounted() {
      //this.addContent();
    },
    methods: {
      addContent() {
        if(this.content) {
          let component = document.querySelector('.comp--resume');
          let wrap = document.querySelector('#'+component.id + ' .content');
          let linkNode = document.querySelector('.cta');

          for(let i=0; i < this.content.length; i++) {
            let el = document.createElement(this.content[i].type);
            let elContent = document.createTextNode(this.content[i].value);
            el.appendChild(elContent);
            wrap.insertBefore(el, linkNode);
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>