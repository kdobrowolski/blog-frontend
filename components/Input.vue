<template>
  <div class="Input_container">
    <label class="container_label" :for="name">{{ label }}</label>

    <template v-if="!isTextarea && !isSearch">
      <input :value="value" :id="name" @input="updateValue($event.target.value)" class="container_input" :type="type" :placeholder="placeholder">
    </template>

    <template v-else-if="isTextarea">
      <textarea :id="name" :value="value" @input="updateValue($event.target.value)" class="container_textarea" :placeholder="placeholder" />
    </template>

    <template v-if="isSearch">
      <input v-model="inputValue" :id="name" class="container_input" :type="type" :placeholder="placeholder">
      <Button element="search" value="Wyszukaj" :input="inputValue" />
    </template>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'Input',
  components: {
    Button
  },
  props: {
    name: {
      type: String
    },
    type: {
      type: String
    },
    placeholder: {
      type: String
    },
    label: {
      type: String
    },
    isTextarea: {
      type: Boolean
    },
    isSearch: {
      type: Boolean
    },
    valueInput: {
      type: [ String, Boolean ]
    },
  },

  data: () => ({
    inputValue: '',
  }),

  methods: {
    updateValue (value) {
      this.$emit('input', value);
    },
  },
  computed: {
    value: {
      get: function () {
        if (this.valueInput) {
          return this.value = this.valueInput;
        } else {
          return this.value = '';
        }
      },
      set: function (newValue) {
        return newValue;
      }
    },
  }
};

</script>

<style lang="scss" scoped>
  @import '../assets/scss/components/Input.scss';
</style>
