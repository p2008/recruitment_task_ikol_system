<template>
  <v-app>
    <v-main>
      <v-container>
        <InputForm @form-submit="requestForDistance"/>
        <OutputDistance :distance="distance"/>
      </v-container>
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
      const { distance, unit } = (await getSimple(geoPoints)).data;
      this.distance = { distance, unit };
    },
  },
};
</script>
