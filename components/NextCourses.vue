<template>
  <div class="comp--next-courses">
    <b-container class="mb-4">
      <b-row align-h="between" align-v="center">
        <b-col md="5">
          <h3>Prochains cours du chapitre</h3>
        </b-col>
        <b-col md="3">
          <div class="swiper-pagination">
            <b-button @click="previousCourse" class="swiper-button-prev">P</b-button>
            <b-button @click="nextCourse" class="swiper-button-next">N</b-button>
          </div>
        </b-col>
      </b-row>

      <div class="swiper-area mt-4">
        <div v-swiper:mySwiper="swiperOptions" ref="nextCoursesSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="course in courses" :key="course.id">
              <CourseCard :chapter="chapter" :course="course" />
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>

  export default {
    props: {
      chapter: {
        type: Object,
      },
      currentCourse: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          slidesPerView: 1,
          spaceBetween: 30,
          //centeredSlides: true,
          //grabCursor: true,
          //loop: true,
          //loopFillGroupWithBlank: true,
          // Some Swiper option/callback...
        },
        courses: [
          {
            id: 0,
            title: 'Avant propos',
            resume: 'Client / Serveur, Javaquoi ?, DOM ou TOM ?, HTeuMeuLeuh ?'
          },
          {
            id: 1,
            title: 'Syntaxe et bases de l\'algorithmie',
            resume: 'eiozj ziofj ezif '
          },
          {
            id: 2,
            title: 'ccc',
            resume: 'eiozj ziofj ezif '
          },
          {
            id: 3,
            title: 'ddd',
            resume: 'eiozj ziofj ezif '
          }
        ]
        
      }
    },
    computed: {
      swiper() {
        return this.$refs.nextCoursesSwiper.$swiper
      }
    },
    mounted() {
      let swiperWrapper = document.querySelector('.swiper-wrapper');
      //swiperWrapper.style.transform = 'translate3d(0px, 0px, 0px)';
    },
    methods: {
      previousCourse() {
        this.swiper.slidePrev();
      },
      nextCourse() {
        this.swiper.slideNext();
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>