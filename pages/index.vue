<template>
  <v-main>
    <v-container v-if="home"
      ><div><nuxt-content :document="home" /></div>
    </v-container>
    <v-container v-else>LOADING</v-container>
  </v-main>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const home = await $content('home').fetch()
    // console.dir(home)
    return {
      home,
    }
  },
}
</script>
