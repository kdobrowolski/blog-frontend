<template>
  <section class="Post_form">
    <form class="form_container" @submit.prevent="submit($event)">
      <Input type="text" v-model="title" placeholder="Tytuł" :value-input="formValue ? formValue.title : false" label="Tytuł" name="title" />
      <p v-if="errors.titleError" class="form_error">{{ errors.titleError }}</p>

      <Input placeholder="Krótki opis" v-model="description" :value-input="formValue ? formValue.description : false" label="Krótki opis" name="short_desc" is-textarea />
      <p v-if="errors.descriptionError" class="form_error">{{ errors.descriptionError }}</p>

      <Input type="text" v-model="tags" placeholder="Tagi" :value-input="formValue ? formValue.tags : false" label="Tagi" name="tags" />
      <p v-if="errors.tagsError" class="form_error">{{ errors.tagsError }}</p>

      <h2 class="container_header">Główne zdjęcie</h2>
      <Button value="Dodaj z galerii" @click.native="addImage"/>
      <p v-if="errors.mainImageError" class="form_error">{{ errors.mainImageError }}</p>

      <h2 class="container_header">Aktualne wybrane zdjęcie</h2>
      <template>
        <img v-if="mainImage" class="container_image" :src="`/public/${mainImage}`" alt="post_image" />
        <p v-else>Brak zdjęcia</p>
      </template>

      <h2 class="container_header">Dodaj zdjęcie do postu</h2>
      <GalleryContainer v-if="showGallery" is-form="true" id="form_gallery" :images="imagesArr" @hide="showGallery = false" @add="pushImageUrl"/>

      <Editor @content="updateContent" :value-input="formValue ? formValue.content : false" :images="imagesArr"/>
      <p v-if="errors.contentError" class="form_error">{{ errors.contentError }}</p>
      <p v-if="success" class="form_success">{{ successType }}</p>
      <Button value="Podgląd" @click.native="preview(true)" />
      <Button element="submit" v-if="postExist" value="Zaaktualizuj" />
      <Button element="submit" v-else value="Dodaj post" />
    </form>
    <template v-if="togglePreview">
      <section class="form_preview">
        <div class="preview_content">
          <img class="page_main_image" :src="`/public/${mainImage}`" alt="post_image" />
          <section class="page_info">
            <span class="info_tags"> {{ tags }} </span>
            <span class="info_date"> - {{ date | formatDate }}</span>
          </section>
          <h2 class="page_header">{{ title }}</h2>
          <section class="page_content" v-html="content"></section>
          <Button value="Zakończ" @click.native="preview(false)" />
        </div>
      </section>
    </template>
  </section>
</template>

<script>
import { postValidation } from '../helpers/validationForms';

export default {
  name: 'PostForm',
  data: () => ({
    imagesArr: [],
    mainImage: null,
    title: '',
    description: '',
    tags: '',
    date: '',
    content: '',
    showGallery: false,
    errors: {
      titleError: null,
      descriptionError: null,
      tagsError: null,
      dateError: null,
      mainImageError: null,
      contentError: null
    },
    success: false,
    successType: '',
    togglePreview: false
  }),
  props: {
    postExist: {
      type: Boolean
    },
    formType: {
      type: String
    },
    formValue: {
      type: Object,
    },
    images: {
      type: Array
    }
  },
  mounted() {
    if (this.formValue) {
      this.title = this.formValue.title;
      this.description = this.formValue.description;
      this.tags = this.formValue.tags;
      this.content = this.formValue.content;
      this.mainImage = this.formValue.mainImage;
      this.date = this.formValue.createdAt;
    }

    this.imagesArr = this.images;
  },
  methods: {
    updateContent(val) {
      this.content = val;
    },
    pushImageUrl(e) {
      this.mainImage = e;
    },
    async preview(open) {
      this.togglePreview = !this.togglePreview;
    },
    async addImage() {
      await this.$store.dispatch('gallery/getImages');
      const images = await this.$store.getters['gallery/getImages'];
      this.imagesArr = images;
      this.showGallery = true;
    },
    resetStatus() {
      this.errors = {
        titleError: null,
        descriptionError: null,
        tagsError: null,
        mainImageError: null,
        contentError: null
      }
      this.success = false;
    },
    async submit(e) {
      this.resetStatus();

      const post = {
        title: this.title,
        description: this.description,
        tags: this.tags,
        mainImage: this.mainImage,
        content: this.content
      }
      
      let validation;

      if (this.formType === 'edit') {
        validation = postValidation(post, true);
      } else {
        validation = postValidation(post, false);
      }

      if (validation.errors) {
        const { errors } = validation;
        this.errors = {
          titleError: errors.titleError,
          descriptionError: errors.descriptionError,
          tagsError: errors.tagsError,
          mainImageError: errors.mainImageError,
          contentError: errors.contentError
        }
      } else {
        if (this.formType === 'create') {
          this.createPost(post);
        } else if (this.formType === 'edit') {
          this.editPost(post);
        }
      }
    },
    async createPost(post) {
      try {
        const { id } = this.$store.getters['users/getUser'];
        const payload = {
          ...post,
          userId: id
        }

        await this.$store.dispatch('posts/createPost', payload);
        this.success = true;
        this.successType = "Post dodano pomyślnie!";

      } catch (error) {
        console.log(error);
      }
    },
    async editPost(post) {
      try {
        const { id } = this.$store.getters['users/getUser'];
        const postId = this.$route.params.post;

        const payload = {
          post: {
            ...post,
            userId: id
          },
          postId: postId,
        }
        console.log(payload);

        await this.$store.dispatch('posts/editPost', payload);
        this.success = true;
        this.successType = "Post zaaktualizowano pomyślnie!";
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
