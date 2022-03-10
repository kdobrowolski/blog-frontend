<template>
  <section class="Comments_container">
    <h2 v-if="Object.keys(commentsData).length !== 0" class="container_header">
      Komentarze
    </h2>
    <template v-if="!isAdmin">
      <form class="container_form" @submit.prevent="submit">
        <Input v-model="fullname" class="form_input" type="text" placeholder="Imię i nazwisko" name="fullname" label="Imię i nazwisko" />
        <p v-if="errors.fullnameError" class="form_error">{{ errors.fullnameError }}</p>
        <Input v-model="content" class="form_input" placeholder="Treść" name="content" label="Treść" is-textarea />
        <p v-if="errors.contentError" class="form_error">{{ errors.contentError }}</p>
        <p v-if="success" class="form_success">Dodano komentarz!</p>
        <Button element="submit" class="form_btn" value="Dodaj komentarz" />
      </form>
    </template>
    <h2 v-if="Object.keys(commentsData).length === 0" class="container_header">
      Brak komentarzy
    </h2>
    <Comment
      id="comment"
      v-for="comment in itemsForList" 
      :key="comment.id"
      :comment-id="comment.id"
      :fullname="comment.fullname" 
      :date="comment.date" 
      :content="comment.content"
      :is-admin="isAdmin"
    />
    <div v-if="Object.keys(commentsData).length !== 0" class="pagination_container" >
      <b-pagination
        v-model="currentPage"
        :total-rows="commentsData.length"
        :per-page="perPage"
        aria-controls="comment"
        align="center"
      ></b-pagination>
    </div>
  </section>
</template>

<script>

export default {
  name: 'CommentsContainer',
  props: {
    comments: {},
    isAdmin: {
      type: Boolean
    }
  },
  data: () => ({
    commentsData: null,
    fullname: '',
    content: '',
    errors: {
      fullnameError: null,
      contentError: null,
    },
    success: false,
    perPage: 6,
    currentPage: 1
  }),
  created() {
    this.commentsData = this.comments;
  },
  computed: {
    itemsForList() {
      return this.commentsData.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage,);
    }
  },
  methods: {
    resetStatus() {
      this.errors = {
        fullnameError: null,
        contentError: null
      }
      this.success = false;
    },
    async submit() {
      this.resetStatus();

      if (this.fullname === '' || undefined) {
        this.errors.fullnameError = "Imię i nazwisko jest wymagane!"
      }
      
      if (this.content === '' || undefined) {
        this.errors.contentError = "Treść jest wymagana!";
      }

      if (!this.errors.fullnameError && !this.errors.contentError) {
        try {
          const postId = this.$route.params.post;
          const comment = {
            fullname: this.fullname,
            content: this.content,
          }

          const payload = {
            postId,
            comment
          }

          await this.$store.dispatch('comments/createComment', payload);
          const newComments = await this.$store.getters['comments/getComments'];
          this.commentsData = newComments;
          this.success = true;
        } catch (error) {
          console.log(error);
        }
      }
    }
  }
}
</script>
