<template>
    <div class="Gallery_container">
        <Button v-if="isForm" value="Zamknij" @click.native="hide()"/>
        <h2 class="container_header">Dodaj do galerii</h2>
        <form class="container_form" @submit.prevent="submit($event)">
            <FileInput v-model="inputValue"/>
            <Button element="submit" value="Dodaj" />
            <p v-if="inputError" class="form_error">Zdjęcie jest wymagane!</p>
        </form>
        <div v-for="image in itemsForList" :key="image.id" class="container_image">
            <img class="image" :src="`/public/${image}`" alt="gallery_image">
            <Button v-if="isForm" value="Wybierz" @click.native="addImage(image)" />
            <Button value="Usuń zdjęcie" @click.native="deleteImage(image)" />
        </div>
        <div class="pagination_container">
            <b-pagination
            v-if="images.length > perPage"
            v-model="currentPage"
            :total-rows="images.length"
            :per-page="perPage"
            aria-controls="images"
            align="center"
            ></b-pagination>
      </div>
        <Alert v-if="alertIsActive" type="deleteImage" :filename="filename" @hide="alertIsActive = false" @images="newImages"/>
    </div>
</template>

<script>
import FileInput from './FileInput';
import Button from './Button';
import Alert from './Alert';

export default {
    name: 'GalleryContainer',
    components: {
        FileInput,
        Button,
        Alert
    },
    data: () => ({
        inputValue: null,
        alertIsActive: false,
        filename: '',
        perPage: 8,
        currentPage: 1,
        inputError: false,
        imagesArr: []
    }),
    props: ['images', 'isForm'],
    computed: {
        itemsForList: {
            get: function () {
                return this.imagesArr.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage,);
            }
        }
    },
    mounted() {
        if (this.images) {
            this.imagesArr = this.images;
        }
    },
    methods: {
        async submit() {
            if (!this.inputValue) {
                this.inputError = true;
            } else {
                this.inputError = false;
                const formData = new FormData();
                formData.append('file', this.inputValue);
                await this.$store.dispatch('gallery/addImage', formData);
                await this.$store.dispatch('gallery/getImages');
                const images = await this.$store.getters['gallery/getImages'];
                this.imagesArr = images;
            }
        },
        newImages(e) {
            this.imagesArr = e;
        },
        deleteImage(image) {
            this.filename = image;
            this.alertIsActive = true;
        },
        addImage(image) {
            this.$emit('add', image);
            this.$emit('hide', false);
        },
        hide() {
            this.$emit('hide', false);
        }
    }
}
</script>

<style lang="scss" scoped>
    .Gallery_container {
        text-align: left;
        & > .container_form, & > .container_header {
            margin-top: 30px;
            text-align: center;
        }
    }
    .container_image {
        margin-top: 40px;
        text-align: center;
        & > .image {
            width: 250px;
            height: 250px;
        }

        @include md {
            display: inline-block;
            width: 50%;
        }

        @include lg {
            width: 33%;
        }

        @include xxl {
            width: 25%;
        }
    }
</style>