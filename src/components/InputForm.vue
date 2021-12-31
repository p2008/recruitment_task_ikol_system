<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    @submit.prevent="submit"
  >
    <div>
      <label>
        Start point
      </label>

      <v-text-field
        v-model="geoPoints.start.latitude"
        :rules="pointRules.latitude"
        label="Start point latitude"
        required
        type="number"
      />

      <v-text-field
        v-model="geoPoints.start.longitude"
        :rules="pointRules.longitude"
        label="Start point longitude"
        required
        type="number"
      />
    </div>

    <div>
      <label>
        End point
      </label>

      <v-text-field
        v-model="geoPoints.end.latitude"
        :rules="pointRules.latitude"
        label="End point latitude"
        required
        type="number"
      />

      <v-text-field
        v-model="geoPoints.end.longitude"
        :rules="pointRules.longitude"
        label="End point longitude"
        required
        type="number"
      />
    </div>

    <div>
      <v-btn
        :disabled="!valid"
        class="mr-4"
        color="success"
        type="submit"
        @click="validate"
      >
        Submit
      </v-btn>

      <v-btn
        class="mr-4"
        color="error"
        @click="clearForm">
        Clear form
      </v-btn>
    </div>
  </v-form>

</template>

<script>
export default {
  name: 'InputForm',

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
    pointRules: {
      latitude: [
        (v) => !!v || 'field is required',
        (v) => (v && v >= -90 && v <= 90) || 'field must be in range (-90, 90)',
      ],
      longitude: [
        (v) => !!v || 'field is required',
        (v) => (v && v >= -180 && v <= 180) || 'field must be in range (-180, 180)',
      ],
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
