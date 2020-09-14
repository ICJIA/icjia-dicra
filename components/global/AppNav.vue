<template>
  <v-app-bar color="white" fixed height="90" class="noprint" app>
    <!-- <v-app-bar-nav-icon
      aria-label="Menu"
      style="color: black"
      large
      @click="toggleDrawer"
    /> -->
    <div style="width: 15px" />
    <img
      src="~static/icjia-logo.png"
      alt="Illinois Criminal Justice Information Authority"
      :width="logoWidth()"
      style="margin-left: -5px; margin-right: 8px"
      class="hover"
    />&nbsp;&nbsp;&nbsp;&nbsp;

    <v-toolbar-title class="heavy hover">
      <!-- <span style="" class="agency hover"
        >GRANT INFO<span
          v-if="!$vuetify.breakpoint.xs && !$vuetify.breakpoint.sm"
          >RMATION</span
        ></span
      > -->
      <span style="" class="agency hover">DEATH IN CUSTODY REPORTING ACT</span>
    </v-toolbar-title>

    <v-spacer />
  </v-app-bar>
</template>

<script>
/* eslint-disable vue/no-use-v-if-with-v-for */

// import { EventBus } from '@/event-bus'
export default {
  data() {
    return {
      loading: true,
      links: null,
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    console.log('STATIC_PATH=', STATIC_PATH)
  },
  methods: {
    // toggleDrawer() {
    //   EventBus.$emit("toggleDrawer");
    // },
    logoWidth() {
      // console.log(this.$vuetify.breakpoint);
      if (this.$vuetify.breakpoint.xs) {
        return 50
      } else {
        return 90
      }
    },
  },
}
</script>

<style>
.agency {
  font-weight: 900;
  font-size: 24px;
}
</style>
