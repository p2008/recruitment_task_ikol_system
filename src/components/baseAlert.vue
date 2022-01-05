<template>
  <v-alert
    outlined
    color="purple"
    class="mt-5 pt-3 pb-3 text-center"
    text
    v-text="text"
  />
</template>

<script>
export default {
  name: 'baseAlert',

  props: {
    text: {
      type: String,
      default: 'The distance could not be evaluated',
    },
  },
};
</script>

<style scoped>

</style>
