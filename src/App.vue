<template>
  <v-app>
    <v-main>
      <v-container>
        <InputForm @form-submit="requestForDistance"/>

        <template v-if="successfulRequest === true">
          <OutputDistance :distance="distance"/>
        </template>
        <template v-if="successfulRequest === false">
          <base-alert/>
        </template>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import InputForm from '@/components/InputForm';
import { getSimple } from '@/api/url_layer';

export default {
  name: 'App',

  components: {
    BaseAlert: () => import('@/components/baseAlert'),
    InputForm,
    OutputDistance: () => import('@/components/OutputDistance'),
  },

  data: () => ({
    distance: {},
    successfulRequest: null,
  }),

  methods: {
    async requestForDistance(geoPoints) {
      try {
        const { distance, unit } = (await getSimple(geoPoints)).data;
        this.distance = { distance, unit };
        this.successfulRequest = true;
      } catch {
        this.successfulRequest = false;
      }
    },
  },
};
</script>
