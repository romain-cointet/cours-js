<template>
  <div :class="['comp--search-class', big?'big':'']">
    <div class="grid">
      <div id="catch-phrase">
        <span v-if="big">Choisis ton cours...</span>
        <span v-else>Mon cours</span>
      </div>

      <div id="chapter">
        <label for="chapter-select" v-show="big">Sélectionne un chapitre</label>
        <b-form-select 
          v-model="chapterSelected" 
          :options="chapterOptions" 
          id="chapter-select"></b-form-select>
      </div>

      <div id="cursus">
        <label for="cursus-select" v-show="big">Sélectionne un cours</label>
        <b-form-select 
          v-model="cursusSelected" 
          :options="cursusOptions[chapterSelected]" 
          id="cursus-select"></b-form-select>
      </div>

      <div id="search-button">
        <button>?</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      big: {
        type: Boolean,
        default: false
      },
      chapter: {
        type: Number,
        default: 0
      },
      course: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        chapterSelected: 0,
        chapterOptions: [
          { value: 0, text: 'Javascript' },
          { value: 1, text: 'Bootstrap & JQuery' },
          { value: 2, text: 'Javascript avancé' },
          { value: 3, text: 'Vue.js' },
          { value: 4, text: 'Nuxt.js', disabled: true }
        ],
        cursusSelected: 0,
        cursusOptions: [
          [
            { value: 0, text: 'Avant propos et dialecte' },
            { value: 1, text: 'Syntaxe et bases de l\'algorithmie' },
            { value: 2, text: 'Navigateur web et définition du DOM' },
          ],
          [
            { value: 0, text: 'Bootstrap' },
            { value: 1, text: 'JQuery' },
          ],
          [
            { value: 0, text: 'L\'asynchrone' },
            { value: 1, text: 'Les services web' },
            { value: 2, text: 'Optimisation du code' },
          ],
          [
            { value: 0, text: 'Qu\'est-ce qu\'un framework ?' },
            { value: 1, text: 'Les Single Page Application' },
            { value: 2, text: 'Installation de Vue-cli' },
          ]
        ]
      }
    },
    watch: {
      'chapterSelected' () {
        console.log(this.chapterSelected, this.cursusSelected)
        this.cursusSelected = 0;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>