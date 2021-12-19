<template>
  <button class="btn">{{ value }}</button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import '../assets/scss/components/Button.scss';

@Component
export default class Button extends Vue {
  @Prop(String) readonly value!: string
}
</script>
