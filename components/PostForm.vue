<template>
  <div class="Post_form">
    <form class="form_container" @submit.prevent="submit($event)">
      <Input type="text" v-model="title" placeholder="Tytuł" :value-input="formValue ? formValue.title : false" label="Tytuł" name="title" />
      <p v-if="errors.titleError" class="form_error">{{ errors.titleError }}</p>
      <Input placeholder="Krótki opis" v-model="description" :value-input="formValue ? formValue.description : false" label="Krótki opis" name="short_desc" is-textarea />
      <p v-if="errors.descriptionError" class="form_error">{{ errors.descriptionError }}</p>
      <Input type="text" v-model="tags" placeholder="Tagi" :value-input="formValue ? formValue.tags : false" label="Tagi" name="tags" />
      <p v-if="errors.tagsError" class="form_error">{{ errors.tagsError }}</p>
      <Input type="date" v-model="date" placeholder="Data" :value-input="formValue ? formValue.date : false" label="Data" name="date" />
      <p v-if="errors.dateError" class="form_error">{{ errors.dateError }}</p>
      <Input type="file" v-model="mainImage" placeholder="Główne zdjęcie" label="Główne zdjęcie" name="main_image" is-file />
      <p v-if="errors.mainImageError" class="form_error">{{ errors.mainImageError }}</p>
      <Editor @content="updateContent" :value-input="formValue ? formValue.content : false"/>
      <p v-if="errors.contentError" class="form_error">{{ errors.contentError }}</p>
      <p v-if="success" class="form_success">{{ successType }}</p>
      <Button value="Podgląd" @click.native="preview(true)" />
      <Button v-if="postExist" value="Zaaktualizuj" is-submit />
      <Button v-else value="Dodaj post" is-submit />
    </form>
    <template v-if="togglePreview">
      <div class="form_preview">
        <div class="preview_content">
          <img class="page_main_image" :src="formValue ? `data:image/png;base64, ${mainImageBase64}` : mainImageBase64" alt="post_image" />
          <div class="page_info">
            <span class="info_tags"> {{ tags }} </span>
            <span class="info_date"> - {{ date }}</span>
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
import { getBase64 } from '../helpers/files';

export default {
  name: 'PostForm',
  components: {
    Editor,
    Input,
    Button
  },
  data: () => ({
    mainImage: null,
    title: '',
    description: '',
    tags: '',
    date: '',
    content: '',
    mainImageBase64: null,
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
    }
  },
  mounted() {
    if (this.formValue) {
      this.title = this.formValue.title;
      this.description = this.formValue.description;
      this.tags = this.formValue.tags;
      this.date = this.formValue.date;
      this.content = this.formValue.content;
    }
  },
  methods: {
    updateContent(val) {
      this.content = val;
    },
    async preview(open) {

      if(open) {
        if(this.formValue) {
          this.mainImageBase64 = this.formValue.mainImage;
        } else if (this.mainImage !== null) {
          await getBase64(this.mainImage).then(data => {
            this.mainImageBase64 = data;
          })
        }
      }
      this.togglePreview = !this.togglePreview;
    },
    async submit(e) {
      this.errors = {
        titleError: null,
        descriptionError: null,
        tagsError: null,
        dateError: null,
        mainImageError: null,
        contentError: null
      }
      this.success = false;

      const post = {
        title: this.title,
        description: this.description,
        tags: this.tags,
        date: this.date,
        file: this.mainImage,
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
          dateError: errors.dateError,
          mainImageError: errors.mainImageError,
          contentError: errors.contentError
        }
      } else {
        if (this.formType === 'create') {
          try {
            const { id } = this.$store.getters['users/getUser'];
            const payload = new FormData();
            payload.append('title', post.title);
            payload.append('description', post.description);
            payload.append('tags', post.tags);
            payload.append('date', post.date);
            payload.append('file', post.file);
            payload.append('content', post.content);
            payload.append('user_id', id);

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

            const postContent = new FormData();
            postContent.append('title', post.title);
            postContent.append('description', post.description);
            postContent.append('tags', post.tags);
            postContent.append('date', post.date);
            postContent.append('content', post.content);
            postContent.append('user_id', id);
            postContent.append('post_id', post_id);

            if (post.file) {
              postContent.append('file', post.file);
            } else {
              postContent.append('file', null);
              postContent.append('oldImage', this.formValue.mainImage);
            }
            const payload = {
              post_id: post_id,
              postContent
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
</style>
