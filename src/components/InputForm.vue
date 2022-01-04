<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="submit"
  >

    <base-geo-points-input
      v-model="geoPoints.start"
      label="Start point"
    />

    <base-geo-points-input
      v-model="geoPoints.end"
      label="End point"
    />

    <input-form-buttons
      @submit="validate"
      @clear="clearForm"
      :valid="valid"
    />
  </v-form>

</template>

<script>
import BaseGeoPointsInput from '@/components/BaseGeoPointsInput';
import InputFormButtons from '@/components/InputFormButtons';

export default {
  name: 'InputForm',
  components: { InputFormButtons, BaseGeoPointsInput },
  data: () => ({
    valid: true,
    geoPoints: {
      start: {
        latitude: '',
        longitude: '',
      },
      end: {
        latitude: '',
        longitude: '',
      },
    },
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    clearForm() {
      this.$refs.form.reset();
    },
    submit() {
      this.$emit('form-submit', this.geoPoints);
    },
  },
};
</script>

<style scoped>

</style>
