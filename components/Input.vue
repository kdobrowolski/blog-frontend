<template>
  <div class="Input_container">
    <label class="container_label" :for="name">{{ label }}</label>
    <input v-if="!isTextarea" v-model="value" :id="name" class="container_input" :type="type" :placeholder="placeholder">
    <textarea v-if="isTextarea" :id="name" class="container_textarea" :placeholder="placeholder" />
    <Button v-if="isSearch" value="Wyszukaj" :input="value" is-search />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';
import Button from '../components/Button.vue';
import '../assets/scss/components/Input.scss';

@Component({
  components: {
    Button
  }
})
export default class Input extends Vue {
  @Prop(String) readonly name!: string;
  @Prop(String) readonly type!: string;
  @Prop(String) readonly placeholder!: string;
  @Prop(String) readonly label!: string;
  @Prop(Boolean) readonly isTextarea!: Boolean;
  @Prop(Boolean) readonly isSearch!: Boolean;

  value: string = '';
}
</script>
