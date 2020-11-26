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
  // Charger les chapitres et les cours
  async loadCursus({commit}) {
    let url = 'data/cursus.json';
    let response = await this.$axios.get(url);
    let chapters = response.data.chapters;
    let courses = response.data.courses;
    
    commit('SET_CHAPTERS', chapters)
    commit('SET_COURSES', courses)
  },
  // Charger le chapitre en cours
  async loadCurrentChapter({commit}, chapterId) {
    commit('SET_CURRENT_CHAPTER', chapterId)
  },
  // Charger le cours en cours
  async loadCurrentCourse({commit}, courseId) {
    commit('SET_CURRENT_COURSE', courseId)
  }

  // TO DO: au clic sur un cours, changer le select search course
}
