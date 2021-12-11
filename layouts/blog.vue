<template>
    <div>
        <Nav />
        <Nuxt />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class BlogLayout extends Vue {
}

</script>

<style lang="scss">
    html, body {
        margin: 0 auto;
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
    }
</style>