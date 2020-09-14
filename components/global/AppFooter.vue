<template>
  <v-footer padless class="noprint mt-12">
    <v-card
      flat
      tile
      class="text-center"
      style="width: 100%; background: #0d4474"
    >
      <v-divider />

      <v-card-text>
        <div style="font-size: 12px; color: #fff">
          &copy;&nbsp;{{ new Date().getFullYear() }}
          <strong>
            <a
              href="http://icjia.state.il.us"
              class="footer-link"
              target="_blank"
              rel="noreferrer"
              >Illinois Criminal Justice Information Authority</a
            > </strong
          >&nbsp;|&nbsp;
          <strong>
            <a
              href="https://github.com/ICJIA/icjia-dicra"
              target="_blank"
              class="footer-link"
              rel="noreferrer"
              >Github</a
            >
          </strong>
        </div>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ['fab fa-facebook', 'fab fa-twitter'],
    loading: true,
    nav: [],
  }),
}
</script>

<style>
.footer-link {
  color: #fff !important;
  text-decoration: underline;
}

.footer-link:hover {
  color: #aaa !important;
}
</style>
