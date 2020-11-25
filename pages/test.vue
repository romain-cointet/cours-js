<template>
  <div class="page--home">
    <Navbar home />
    <article>
      <Hero 
        home 
        chapter="Javascript" 
        title="Welcode to the jungle;"
        subtitle="« L’Amazonie n’est pas aussi vaste que le Javascript. Et utiliser Git, c’est un peu comme savoir planter des arbres… Alors si tu maîtrises les deux, on peut dire que t’es le sauveur de la planète non ? »" />

      <b-container>
        <Intro :content="resumeContent" :link="resumeLink" id="intro"/>
      </b-container>

      <NextCourses :chapter="{id:0, title:'Javascript'}" :currentCourse="0" id="next-courses"/>

      <b-container>
        <Intro :content="comebackContent" :link="comebackLink"/>
      </b-container>

      <nuxt-link to="/">HOME</nuxt-link>
      
    </article>
    

  </div>
</template>

<script>
export default {
  data() {
    return {
      resumeContent: [
        {
          type: 'h4',
          value: 'Bienvenue dans la jungle merveilleuse du développement web !'
        },
        {
          type: 'p',
          value: 'Ici tu apprendras les bases de la programmation web en Javascript mais tout bon développeur qui se respecte se doit de faire une veille constante et régulière, et surtout, de bouffer du code !'
        },
        {
          type: 'p',
          value: 'Ah et dernière chose, si tu te perds en cours de route, pas de honte à avoir, cette jungle est un véritable labyrinthe. Alors, n’ai pas peur de m’appeler !'
        }
      ],
      resumeLink: {
        type: 'internal',
        src: '/',
        value: 'On commence ?'
      },
      comebackContent: [
        {
          type: 'h3',
          value: 'Hop hop hop ! <br>On a pas finit, c’est pas l’heure de glander.'
        },
        {
          type: 'p',
          value: 'Je t’ai vu essayer d’aller plus vite que la musique ! Est-ce que t’as au moins trouvé la Savage Banana ? Dans tous les cas, tu vas trop vite… Remonte à la sélection des cours et fais les dans l’ordre !'
        }
      ],
      comebackLink: {
        type: 'scroller',
        src: '#intro',
        value: 'Revenir au choix du cours'
      },
    }
  }
}
</script>

<style>
</style>
