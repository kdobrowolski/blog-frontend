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
import { Component, Vue } from 'vue-property-decorator';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';
Vue.use(VueAwesomeSwiper)

@Component
export default class LatestPostsBoard extends Vue {
    swiperOptions: Object = {
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
</script>