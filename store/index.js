export const state = ()=> ({
  chapters: [],
  courses: [],
  chapterSelected: 0,
  courseSelected: 0
  /*
  videos: [],
  tags: []
  */
})

export const mutations = {
  /*
  SET_VIDEOS (state, videos) {
    state.videos = videos
  },
  SET_TAGS (state, tags) {
    state.tags = tags
  }
  SET_CURRENT_VIDEO (state, video) {
    state.currentVideo = video
  }
  */
  SET_CHAPTERS(state, chapters) {
    state.chapters = chapters
  },
  SET_COURSES(state, courses) {
    state.courses = courses
  },

  SET_CURRENT_CHAPTER(state, chapter) {
    state.chapterSelected = chapter
  },
  SET_CURRENT_COURSE(state, course) {
    state.courseSelected = course;
  }
}


export const actions = {
  /*
  async loadAllVideos({commit}) {
    // Appel axios
    let response = await this.$axios.get('/videos')

    let videos = response.data.data;
    videos.forEach(v => {
      v.attributes.tags_ids = v.relationships.tags.data.map(t => t.id);
    })

    let tags = response.data.included;
    tags.forEach(t => {
      t.attributes.id = t.id;
    })

    commit('SET_VIDEOS', videos.map(v => v.attributes)) 
    commit('SET_TAGS', tags.map(t => t.attributes)) 
  }
  */

  // Charger les chapitres et les cours
  async loadCursus({commit}) {
    //let response = await this.$axios.get('http://localhost:3000/static/data/cursus.js');
    //console.log('RESPONSE', response);
    
    let chapters = [
      { value: 0, text: 'Javascript' },
      { value: 1, text: 'Bootstrap & JQuery' },
      { value: 2, text: 'Javascript avancé' },
      { value: 3, text: 'Vue.js' },
      { value: 4, text: 'Nuxt.js' }
    ];
    let courses = [
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
      ],
      [
        { value: 0, text: 'Hello Nuxt' },
      ]
    ];
    
    commit('SET_CHAPTERS', chapters)
    commit('SET_COURSES', courses)
  },
  async loadCurrentChapter({commit}, chapterId) {
    commit('SET_CURRENT_CHAPTER', chapterId)
  },
  async loadCurrentCourse({commit}, courseId) {
    commit('SET_CURRENT_COURSE', courseId)
  }
}
