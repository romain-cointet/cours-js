<template>
  <div class="page--home" v-if="content">
    
    <article>
      <Hero 
        home 
        :title="content.head.title"
        :subtitle="content.head.resume" />

      <b-container>
        <Intro :content="content.intro" id="intro"/>
      </b-container>
      
      <NextCourses :chapter="{id:0, title:'Javascript'}" :currentCourse="0" id="next-courses"/>

      <b-container>
        <Intro :content="content.comeBack" />
      </b-container>

      <nuxt-link to="/test">TEST</nuxt-link>
      
    </article>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      content: {
        "head": {
          "title": "Welcode to the jungle;",
          "resume": "« L’Amazonie n’est pas aussi vaste que le Javascript. Et utiliser Git, c’est un peu comme savoir planter des arbres… Alors si tu maîtrises les deux, on peut dire que t’es le sauveur de la planète non ? »"
        },
        "intro": {
          "left": [
            {
              "type": "h4",
              "value": "Bienvenue dans la jungle merveilleuse du développement web !"
            },
            {
              "type": "p",
              "value": "Ici tu apprendras les bases de la programmation web en Javascript mais tout bon développeur qui se respecte se doit de faire une veille constante et régulière, et surtout, de bouffer du code !"
            },
            {
              "type": "p",
              "value": "Ah et dernière chose, si tu te perds en cours de route, pas de honte à avoir, cette jungle est un véritable labyrinthe. Alors, n’ai pas peur de m’appeler !"
            },
            {
              "type": "nuxt-link",
              "src": "/0/0",
              "value": "On commence ?"
            }
          ],
          "right": [
            {
              "type": "img",
              "src": "",
              "alt": ""
            }
          ]
        },
        "comeBack": {
          "left": [
            {
              "type": "h3",
              "value": "Hop hop hop ! <br>On a pas finit, c’est pas l’heure de glander."
            },
            {
              "type": "p",
              "value": "Je t’ai vu essayer d’aller plus vite que la musique ! Est-ce que t’as au moins trouvé la Savage Banana ? Dans tous les cas, tu vas trop vite… Remonte à la sélection des cours et fais les dans l’ordre !"
            },
            {
              "type": "a",
              "src": "#intro",
              "value": "Revenir au choix du cours"
            }
          ],
          "right": [
            {
              "type": "img",
              "src": "",
              "alt": ""
            }
          ]
        }
      },
    }
  },
  async fetch({store, $axios}) {
    /*
    let url = 'data/home.json';
    let response = await $axios.get(url);
    let content = response.data;
    console.log("AXIOS",content)
    this.content = content;
    */

    //await store.dispatch('loadAllVideos')
    await store.dispatch('loadCursus')
  }
}
</script>

<style>
</style>
