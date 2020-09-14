/* eslint-disable no-undef */
import Vue from 'vue'

Vue.mixin({
  computed: {
    STATIC_PATH: () => STATIC_PATH,
  },
  mounted() {
    // console.log('STATIC_PATH=', STATIC_PATH)
  },
})
