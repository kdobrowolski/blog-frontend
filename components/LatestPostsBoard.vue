<template>
  <section class="Latest_posts_board">
    <h1 class="board_header">
      Najnowsze
    </h1>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <LatestPost />
      </swiper-slide>
      <swiper-slide>
        <LatestPost />
      </swiper-slide>
      <swiper-slide>
        <LatestPost />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import '../assets/scss/components/LatestPostsBoard.scss';
Vue.use(VueAwesomeSwiper);

@Component
export default class LatestPostsBoard extends Vue {
    swiperOptions: Object = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      speed: 1000,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    }
}
</script>
