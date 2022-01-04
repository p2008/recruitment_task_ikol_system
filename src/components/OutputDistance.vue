<template>
  <div v-if="evaluatedDistance.value">
    <base-switch :options="options"
                 @click="evaluateDistance"
    />
    <span>
      The distance between points is equal {{ evaluatedDistance.value }} {{ evaluatedDistance.unit }}
    </span>
  </div>
</template>

<script>
import BaseSwitch from '@/components/BaseSwitch';
import units from '@/json/units';

export default {
  name: 'OutputDistance',

  components: { BaseSwitch },

  props: {
    distance: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      evaluatedDistance: {},
      units,
    };
  },

  computed: {
    options() {
      return {
        title: 'Switch unit',
        list: Object.keys(this.units),
      };
    },
  },

  watch: {
    distance: {
      handler() {
        this.evaluateDistance(this.distance.unit);
      },
    },
  },

  methods: {
    divideBy(unit) {
      return this.units[unit];
    },
    evaluateDistance(unit) {
      this.evaluatedDistance = {
        value: this.distance.value / this.divideBy(unit),
        unit,
      };
    },
  },
};
</script>

<style scoped>

</style>
