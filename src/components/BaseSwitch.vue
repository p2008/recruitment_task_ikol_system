<template>
  <div>
    <v-btn-toggle
      v-model="currentOption"
      mandatory
      @change="onChangeEmit"
    >
      <v-btn
        v-for="option in options.list"
        :key="option"
      >
        <span v-text="option"/>
      </v-btn>
    </v-btn-toggle>
  </div>
</template>

<script>
export default {
  name: 'BaseSwitch',

  props: {
    default_option: {
      type: Number,
      default: 0,
    },
    options: {
      type: Object,
      required: true,
      validator(options) {
        const {
          title,
          list,
        } = options;

        return typeof title === 'string' && Array.isArray(list);
      },
    },
  },

  data() {
    return {
      currentOption: JSON.parse(JSON.stringify(this.default_option)),
    };
  },

  methods: {
    onChangeEmit() {
      this.$emit('click', this.options.list[this.currentOption]);
    },
  },
};
</script>

<style scoped>

</style>
