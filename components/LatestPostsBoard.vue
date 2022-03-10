<template>
  <section class="Latest_posts_board">
    <h2 class="board_header">
      Najnowsze
    </h2>
    <swiper class="swiper" ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="latestPost in latestPosts" :key="latestPost.id">
        <LatestPost 
          :post-id="latestPost.id"
          :title="latestPost.title"
          :description="latestPost.description"
          :tags="latestPost.tags"
          :date="latestPost.created_at"
          :image="latestPost.mainImage"
        />
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination" />
    </swiper>
  </section>
</template>

<script>

export default {
  name: 'LatestPostsBoard',
  latestPosts: null,
  data: () => ({
    swiperOptions: {
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
  }),
  props: ['posts'],
  created() {
    let latestPostsData = this.posts.slice(Math.max(this.posts.length - 3, 0));
    this.latestPosts = latestPostsData.reverse();
  },
}
</script>
