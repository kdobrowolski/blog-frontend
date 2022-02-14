<template>
    <div class="Alert">
        <h1 class="alert_content">
            Jesteś pewien?
        </h1>
        <Button value="Tak" @click.native="func(type)"/>
        <Button value="Nie" @click.native="close"/>
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
  name: 'Alert',
  components: {
      Button
  },
  props: ['type', 'filename'],
  methods: {
    async func(type) {
        if (type == 'deletePost') {
            try {
                const id = this.$route.params.post;

                await this.$store.dispatch('posts/deletePosts', id);
                this.$emit('hide', false);
                this.$router.push('/admin/posts');
            } catch (error) {
                console.log(error);
            }
        } else if (type == 'deleteModerator') {
            const id = this.$route.params.moderator;
      
            try {
                await this.$store.dispatch('users/deleteModerator', id);
                this.$emit('hide', false);
                this.$router.push('/admin/moderators');
            } catch (error) {
                console.log(error);
            }
        } else if (type == 'deleteImage') {
            try {
                const payload = {
                    filename: this.filename
                }
                await this.$store.dispatch('gallery/deleteImage', payload);
                await this.$store.dispatch('gallery/getImages');
                const images = await this.$store.getters['gallery/getImages'];
                this.$emit('images', images);
                this.$emit('hide', false);
            } catch (err) {
                console.log(err);
            }
        }
    },

    close() {
        this.$emit('hide', false);
    }
  }
}
</script>

<style lang="scss" scoped>

    .Alert {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: white;
        z-index: 9999;

        & > .alert_content {
            margin-top: 200px;
            text-align: center;
        }
    }

</style>