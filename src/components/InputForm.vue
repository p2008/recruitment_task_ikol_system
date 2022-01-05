<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      lazy-validation
      @submit.prevent="submit"
    >
      <v-row>
        <v-col>
          <base-geo-points-input
            v-model="geoPoints.start"
            label="Start point"
          />
        </v-col>

        <v-col>
          <base-geo-points-input
            v-model="geoPoints.end"
            label="End point"
          />
        </v-col>
      </v-row>

      <v-row>
        <input-form-buttons
          :valid="valid"
          @clear="clearForm"
          @submit="validate"
        />
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import BaseGeoPointsInput from '@/components/BaseGeoPointsInput';
import InputFormButtons from '@/components/InputFormButtons';

export default {
  name: 'InputForm',
  components: {
    InputFormButtons,
    BaseGeoPointsInput,
  },
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
