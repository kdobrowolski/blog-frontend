<template>
    <section class="latest-posts">
        <h1 class="latest-posts-header">Najnowsze</h1>
        <swiper ref="mySwiper" v-bind:options="swiperOptions">
            <swiper-slide>
                <LatestPost />
            </swiper-slide>
            <swiper-slide>
                <LatestPost />
            </swiper-slide>
            <swiper-slide>
                <LatestPost />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script lang="ts">
import Vue from 'vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import LatestPost from './LatestPost.vue';

export default Vue.extend({
    data() {
      return {
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          speed: 1000,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
        }
      }
    },
    components: {
        LatestPost,
        Swiper,
        SwiperSlide
    },
    directives: {
        swiper: directive
    },
})
</script>