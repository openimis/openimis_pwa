<template>
  <v-menu transition="slide-x-reverse-transition">
    <v-btn slot="activator" dark color="primary" v-on:click="getFamilyOk">Make online request</v-btn>
    <v-btn slot="activator" dark color="secondary" v-on:click="getFamilyFail">Make offline request</v-btn>
  </v-menu>
</template>

<script>
export default {
  name: 'TestRequest',
  data() {
    return {
      requests: this.$store.requests
    }
  },
  methods: {
    getFamilyOk() {
      return this.$axios
        .get(
          'https://baselhack.swisstph-mis.ch/RestApi/api/family/?page=1&resultsPerPage=20'
        )
        .then(console.warn)
        .catch(console.error)
    },
    getFamilyFail() {
      return this.$axios
        .get(
          'https://baselhack.swisstph-mis.ch/RestApi/api/offline/?page=1&resultsPerPage=20'
        )
        .then(console.warn)
        .catch(console.error)
    }
  }
}
</script>

<style scoped>
</style>
