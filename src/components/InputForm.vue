<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="geoPoints.start"
      label="Start point"
      required
    />

    <v-text-field
      v-model="geoPoints.end"
      label="End point"
      required
    />

    <v-btn
      class="mr-4"
      type="submit"
    >
      submit
    </v-btn>

    <v-btn
      @click="clear">
      clear
    </v-btn>
  </form>

</template>

<script>
export default {
  name: 'InputForm',

  data: () => ({
    geoPoints: {
      start: '',
      end: '',
    },
  }),

  methods: {
    submit() {
      this.$emit('form-submit', this.geoPoints);
    },
    clear() {
      this.geoPoints = {};
    },
  },
};
</script>

<style scoped>

</style>
