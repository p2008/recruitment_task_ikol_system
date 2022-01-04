<template>
  <v-app>
    <v-main>
      <InputForm @form-submit="apiPost"/>
      <OutputDistance :distance="distance"/>
    </v-main>
  </v-app>
</template>

<script>
import InputForm from '@/components/InputForm';
import OutputDistance from '@/components/OutputDistance';

export default {
  name: 'App',

  components: {
    InputForm,
    OutputDistance,
  },

  data: () => ({
    distance: {},
  }),

  methods: {
    apiPost(geoPoints) {
      console.log(geoPoints.start, geoPoints.end);
      return new Promise(() => {
        this.distance = { value: '1000', unit: 'meter' };
      });
    },
  },
};
</script>
