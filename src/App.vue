<template>
  <v-app>
    <v-main>
      <InputForm @form-submit="apiPost"/>
    </v-main>
  </v-app>
</template>

<script>
import InputForm from '@/components/InputForm';

export default {
  name: 'App',

  components: {
    InputForm,
  },

  data: () => ({
    //
  }),

  methods: {
    apiPost(geoPoints) {
      console.log(geoPoints.start, geoPoints.end);
    },
  },
};
</script>
