<template>
    <div class="Post_card">
        <img class="box_image" v-bind:src="'_nuxt/assets/img/' + image"/>
        <div class="box_content">
            <div class="content_info">
                <span class="info_tags">{{ tags }}</span>
                <span class="info_date"> - {{ date }}</span>
            </div>
            <h2 class="content_header">{{ title }}</h2>
            <p class="content_description">{{ description }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator';
import '../assets/scss/components/PostCard.scss';

@Component
export default class PostCard extends Vue {
    @Prop(String) readonly title!: string | undefined;
    @Prop(String) readonly description!: string | undefined;
    @Prop(String) readonly tags!: string | undefined;
    @Prop(String) readonly date!: string | undefined;
    @Prop(String) readonly image!: string | undefined; 
}
</script>