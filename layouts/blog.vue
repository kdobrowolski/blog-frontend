<template>
    <div>
        <Nav />
        <Nuxt />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Nav from '../components/Nav.vue';

export default Vue.extend({
    components: {
        Nav
    }
})
</script>

<style lang="scss">
    html, body {
        margin: 0 auto;
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
    }
</style>