<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center">
        <h1>openIMIS</h1>
      </div>
      <v-card>
        <v-card-title class="headline">Tanzania rules!!!</v-card-title>
        <v-card-text>
          <FormLogin></FormLogin>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat nuxt to="/addFamily">Continue</v-btn>
        </v-card-actions>

      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import FormLogin from '~/components/FormLogin'

export default {
  components: {
    FormLogin
  },
  data() {
    return {
      // requests: this.$store.requests
    }
  }
}
</script>
