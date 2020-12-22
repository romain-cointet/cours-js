<template>
  <div class="comp--next-courses">
    <b-container class="mb-4">
      <b-row align-h="between" align-v="center">
        <b-col md="5">
          <h3>Prochains cours du chapitre</h3>
        </b-col>
        <b-col md="3">
          <div class="swiper-pagination">
            <b-button @click="previousCourse" class="swiper-button-prev"><img src="~/assets/img/icon-previous.svg" alt="Cours précédent"/></b-button>
            <b-button @click="nextCourse" class="swiper-button-next"><img src="~/assets/img/icon-next.svg" alt="Cours suivant"/></b-button>
          </div>
        </b-col>
      </b-row>

      <div class="swiper-area mt-4">
        <swiper :mySwiper="swiperOptions" ref="nextCoursesSwiper">
            <swiper-slide  v-for="course in courses[chapterSelected]" :key="course.id">
              <CourseCard :chapter="chapters[chapterSelected]" :course="course" />
            </swiper-slide>
        </swiper>
      </div>
    </b-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    props: {
      courseRead: {
        type: Boolean,
        default: false
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
        },
        swiper: null,
      }
    },
    computed: {
      ...mapState(['chapters', 'courses', 'chapterSelected', 'courseSelected'])
    },
    mounted() {
      this.swiper = this.$refs.nextCoursesSwiper.$swiper;
      if(this.courseRead) {
        let nextSlide = parseInt(this.$route.params.courseId) + 1;
        this.swiper.slideTo(nextSlide);
      }
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