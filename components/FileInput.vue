<template>
    <div class="file_input">
        <input type="file" @input="updateValue($event.target.files[0])" />
    </div>
</template>

<script>
export default {
    name: 'FileInput',
    methods: {
    updateValue (value) {
      this.$emit('input', value);
    },
  },
}
</script>