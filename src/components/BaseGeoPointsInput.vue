<template>
  <div>
    <label v-text="label"/>

    <v-text-field
      v-model="points.latitude"
      :rules="rules.latitude"
      :label="`${label} latitude`"
      required
      type="number"
    />

    <v-text-field
      v-model="points.longitude"
      :rules="rules.longitude"
      :label="`${label} longitude`"
      required
      type="number"
    />
  </div>
</template>

<script>
import { geoPointRules } from '@/helpers/geoPoints';

export default {
  name: 'BaseGeoPointsInput',

  props: {
    value: {
      type: Object,
      required: true,
    },
    rules: {
      type: Object,
      default: () => geoPointRules,
    },
    label: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      points: JSON.parse(JSON.stringify(this.value)),
    };
  },

  watch: {
    points: {
      handler() {
        this.$emit('input', this.points);
      },
      deep: true,
    },
  },
};
</script>

<style scoped>

</style>
