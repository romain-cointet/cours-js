<template>
  <div class="page--home" v-if="content">
    <Navbar home />
    <article>
      <Hero 
        home 
        :title="content.head.title"
        :subtitle="content.head.resume"
        :showSearchCourse="true" />

      <b-container>
        <Intro :content="content.intro" id="intro"/>
      </b-container>
      
      <NextCourses id="next-courses"/>

      <b-container>
        <Intro :content="content.comeBack" />
      </b-container>
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
              "value": "On commence ?",
              "class": "mb-4"
            }
          ],
          "right": [
            {
              "type": "img",
              "src": "home.gif",
              "alt": "Welcode to the jungle;"
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
              "value": "Je t’ai vu essayer d’aller plus vite que la musique ! Est-ce que t’as au moins suivi un cours avant d'aller sur Netflix ? Dans tous les cas, tu vas trop vite… Remonte à la sélection des cours et fais les dans l’ordre !"
            },
            {
              "type": "a",
              "href": "#intro",
              "class": "btn btn-primary cta mb-4",
              "value": "Revenir au choix du cours"
            }
          ],
          "right": [
            {
              "type": "img",
              "src": "watching-you.gif",
              "alt": "I see you"
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
