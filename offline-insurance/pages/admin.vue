<!--// this is admin area only available to admins-->
<template>
  <v-layout>
    <v-flex text-xs-center>
      <TestRequest></TestRequest>
      {{ requests }}
      {{ requestsErrors }}

      <v-list>
        <v-list-tile v-for="request in requestsErrors" :key="request.url">
          <v-list-tile-title v-text="request"></v-list-tile-title>
        </v-list-tile>
      </v-list>

      <!--<v-list>-->
        <!--<v-list-tile v-for="m in requests" :key="m">-->
          <!--<v-list-tile-title v-text="m"></v-list-tile-title>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->

    </v-flex>
  </v-layout>
</template>
<script>
import { mapState } from 'vuex'

import TestRequest from '../components/TestRequest'

export default {
  components: {
    TestRequest
  },
  computed: mapState(['requests', 'requestsErrors'])
}
</script>
