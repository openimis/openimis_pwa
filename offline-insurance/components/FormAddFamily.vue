<template>
  <div class="text-xs-center">
    <v-menu transition="slide-x-transition">
      <v-btn slot="activator" dark color="primary">Slide X Transition</v-btn>
      <v-list>
        <v-list-tile v-for="n in members" :key="n">
          <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
    <v-menu transition="slide-x-reverse-transition">
      <v-btn slot="activator" dark color="secondary">Slide X Reverse Transition</v-btn>
      <v-list>
        <v-list-tile v-for="n in locations" :key="n">
          <v-list-tile-title v-text="'Item ' + n"></v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: this.$store.state.sidebar,
      members: this.$store.state.members // family members
    }
  },
  computed: {
    locations() {
      return this.$store.state.master.locations
    }
  }
}
</script>
<style>
.VuetifyLogo {
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
