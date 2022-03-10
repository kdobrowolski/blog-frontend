<template>
    <div class="Alert">
        <h2 class="alert_content">
            Jesteś pewien?
        </h2>
        <Button value="Tak" @click.native="func(type)"/>
        <Button value="Nie" @click.native="close"/>
    </div>
</template>

<script>

export default {
  name: 'Alert',
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
        } else if (type == 'deleteUser') {
            const id = this.$route.params.user;
      
            try {
                await this.$store.dispatch('users/deleteUser', id);
                this.$emit('hide', false);
                this.$router.push('/admin/users');
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