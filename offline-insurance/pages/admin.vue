<!--// this is admin area only available to admins-->
<template>
  <v-layout>
    <v-flex text-xs-center>
      <TestRequest></TestRequest>

      {{ requestsErrors }}

      <!--<v-list>-->
        <!--<v-list-tile v-for="e in requestsErrors" :key="e.url">-->
          <!--<v-list-tile-title v-text="e"></v-list-tile-title>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->

      <!--<v-list>-->
        <!--<v-list-tile v-for="request in requests" :key="request.url">-->
          <!--<v-list-tile-title v-text="value"></v-list-tile-title>-->
        <!--</v-list-tile>-->
      <!--</v-list>-->

      {{ requests }}

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
