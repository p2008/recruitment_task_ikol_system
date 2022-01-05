<template>
  <v-app>
    <v-main>
      <InputForm @form-submit="requestForDistance"/>
      <OutputDistance :distance="distance"/>
    </v-main>
  </v-app>
</template>

<script>
import InputForm from '@/components/InputForm';
import OutputDistance from '@/components/OutputDistance';
import { getSimple } from '@/api/url_layer';

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
    async requestForDistance(geoPoints) {
      const { distance: value, unit } = (await getSimple(geoPoints)).data;
      this.distance = { value, unit };
    },
  },
};
</script>
