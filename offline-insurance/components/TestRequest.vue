<template>
  <v-menu transition="slide-x-reverse-transition">
    <v-btn slot="activator" dark color="secondary" v-on:click="updateUser">Make offline request</v-btn>
    <v-list>
      <v-list-tile v-for="n in requests" :key="n">
        <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
      </v-list-tile>
    </v-list>
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
    updateUser() {
      return this.$axios
        .get('https://baselhack.swisstph-mis.ch/RestApi/api/family/1')
        .then(console.warn)
        .catch(console.error)
    }
  }
}
</script>

<style scoped>
</style>
