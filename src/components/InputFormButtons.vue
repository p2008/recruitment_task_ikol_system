<template>
  <div>
    <v-btn
      id="submit"
      :disabled="!$attrs.valid"
      class="mr-4"
      color="success"
      type="submit"
      @click="$listeners.submit"
    >
      Submit
    </v-btn>

    <v-btn
      id="clear"
      class="mr-4"
      color="error"
      @click="$listeners.clear">
      Clear form
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'InputFormButtons',
};
</script>

<style scoped>

</style>
