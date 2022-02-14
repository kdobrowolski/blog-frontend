<template>
  <div class="Post_form">
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
      <div class="form_preview">
        <div class="preview_content">
          <img class="page_main_image" :src="`/public/${mainImage}`" alt="post_image" />
          <div class="page_info">
            <span class="info_tags"> {{ tags }} </span>
            <span class="info_date"> - {{ date | formatDate }}</span>
          </div>
          <h2 class="page_header">{{ title }}</h2>
          <div class="page_content" v-html="content"></div>
          <Button value="Zakończ" @click.native="preview(false)" />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Editor from './Editor';
import Input from './Input';
import Button from './Button';
import { postValidation } from '../helpers/validationForms';

export default {
  name: 'PostForm',
  components: {
    Editor,
    Input,
    Button
  },
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
    console.log(this.formValue);
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
    async submit(e) {
      this.errors = {
        titleError: null,
        descriptionError: null,
        tagsError: null,
        mainImageError: null,
        contentError: null
      }
      this.success = false;

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
          try {
            const { id } = this.$store.getters['users/getUser'];
            const payload = {
              ...post,
              user_id: id
            }

            await this.$store.dispatch('posts/createPost', payload);
            this.success = true;
            this.successType = "Post dodano pomyślnie!";

          } catch (error) {
            console.log(error);
          }
        } else if (this.formType === 'edit') {
          try {
            const { id } = this.$store.getters['users/getUser'];
            const post_id = this.$route.params.post;

            const payload = {
              ...post,
              user_id: id,
              post_id: post_id,
              mainImage: this.mainImage
            }

            await this.$store.dispatch('posts/editPost', payload);
            this.success = true;
            this.successType = "Post zaaktualizowano pomyślnie!";
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  }
};
</script>

<style lang="scss" >
  @import '~/assets/scss/components/PostForm.scss';

  #form_gallery {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw !important;
    height: 100%;
    overflow-y: scroll;
    background-color: white;
    z-index: 999 !important;
  }

  .container_header {
    margin-top: 30px;
    font-size: 1.4rem;
    font-weight: 500;
    color: #007aff;
  }

  .container_image {
    margin-top: 25px;
    width: 250px;
  }
</style>
