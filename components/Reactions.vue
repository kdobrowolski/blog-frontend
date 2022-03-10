<template>
  <section class="Reactions_container">
    <h2 class="container_header">
      Reakcje
    </h2>
    <div class="container_icon">
      <font-awesome-icon :class="likeActive ? 'active_like' : 'icon_like'" icon="thumbs-up" @click="addReaction('like')"/>
      <span class="icon_count_reactions">{{ likesCounter }}</span>
    </div>
    <div class="container_icon container_icon--margin-left">
      <font-awesome-icon :class="heartActive ? 'active_heart' : 'icon_heart'" icon="heart" @click="addReaction('heart')"/>
      <span class="icon_count_reactions">{{ heartsCounter }}</span>
    </div>
    <div class="container_icon container_icon--margin-left">
      <font-awesome-icon :class="starActive ? 'active_star' : 'icon_star'" icon="star" @click="addReaction('star')"/>
      <span class="icon_count_reactions">{{ starsCounter }}</span>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Reactions',
  props: [ 'reactions', 'reactionType' ],
  data: () => ({
    likeActive: false,
    starActive: false,
    heartActive: false,
    likesCounter: 0,
    heartsCounter: 0,
    starsCounter: 0
  }),
  created() {
    this.reactions.map(reaction => {
      if (reaction.reactionType == "like") {
        this.likesCounter = reaction.count;
      }
      else if (reaction.reactionType == "heart") {
        this.heartsCounter = reaction.count;
      }
      else if (reaction.reactionType == "star") {
        this.starsCounter = reaction.count;
      }
    })
    if (this.reactionType == 'like') {
      this.likeActive = true
    } else if (this.reactionType == 'heart') {
      this.heartActive = true
    } else if (this.reactionType == 'star') {
      this.starActive = true
    }
  },
  methods: {
    async addReaction(type) {
      try {
        const ip = this.$store.getters['getIp'];

        const payload = {
          postId: this.$route.params.post,
          reaction: {
            reactionType: type,
            userIp: ip
          }
        };
        if (this.likeActive && type == 'like') {
          await this.$store.dispatch('posts/deleteReaction', payload);
          this.likeActive = false;
        } else if (this.heartActive && type == 'heart') {
          await this.$store.dispatch('posts/deleteReaction', payload);
          this.heartActive = false;
        } else if (this.starActive && type == 'star') {
          await this.$store.dispatch('posts/deleteReaction', payload);
          this.starActive = false;
        } else {
          await this.$store.dispatch('posts/addReaction', payload);

          this.likeActive = false;
          this.heartActive = false;
          this.starActive = false;
          if (type == 'like') {
            this.likeActive = true
          } else if (type == 'heart') {
            this.heartActive = true
          } else if (type == 'star') {
            this.starActive = true
          }
        }

        const postId = this.$route.params.post;
        const data = await this.$store.dispatch('posts/getOnePost', postId);
        const { reactions } = data.post;

        this.likesCounter = 0;
        this.heartsCounter = 0;
        this.starsCounter = 0;

        reactions.map(reaction => {
          if (reaction.reactionType == "like") {
            this.likesCounter = reaction.count;
          }
          else if (reaction.reactionType == "heart") {
            this.heartsCounter = reaction.count;
          }
          else if (reaction.reactionType == "star") {
            this.starsCounter = reaction.count;
          }
        })
        
      } catch (error) {
        console.log(error);
      }
    }
  }
};

</script>
