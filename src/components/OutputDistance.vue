<template>
  <v-card
    v-if="'distance' in evaluatedDistance"
    class="card-inner-center my-12"
    flat
  >
    <v-card-text>
      <p class="text-h4 v-label">
        The distance
      </p>
    </v-card-text>

    <v-card-text>
      <base-switch
        :options="options"
        @click="evaluateDistance"
      />
    </v-card-text>

    <v-card-text>
      <p class="text-h4 v-label">
        {{ evaluatedDistance.distance }} {{ evaluatedDistance.unit }}
      </p>
    </v-card-text>
  </v-card>
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
      validator(options) {
        const { distance, unit } = options;
        const areNoKeysInDistance = !Object.keys(options).length;
        const areDistanceValuesStrings = typeof distance === 'number' && typeof unit === 'string';
        return areNoKeysInDistance || areDistanceValuesStrings;
      },
    },
  },

  data() {
    return {
      roundTo: 2,
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
      immediate: true,
    },
  },

  methods: {
    divideBy(unit) {
      return this.units[unit];
    },
    evaluateDistance(unit) {
      this.evaluatedDistance = {
        distance: (this.distance.distance / this.divideBy(unit)).toFixed(this.roundTo),
        unit,
      };
    },
  },
};
</script>

<style scoped>

.card-inner-center {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.v-card__text {
  width: auto;
}
</style>
