<!--// this is admin area only available to admins-->
<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <TestRequest></TestRequest>
          <v-card>
            <v-toolbar color="blue" dark>
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title>Requests</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>search</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>check_circle</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list two-line>
              <template v-for="(item, index) in requests">
                <v-list-tile :key="index" avatar ripple>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.url }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ item.method }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>{{ item.data }}</v-list-tile-action-text>
                    <v-icon color="grey lighten-1">star_border</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
              </template>
            </v-list>
          </v-card>

        <v-card>
          <v-toolbar color="blue" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title>Requests to be synced</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>check_circle</v-icon>
            </v-btn>
          </v-toolbar>
          <v-list two-line>
            <template v-for="(item, index) in requestsErrors">
              <v-list-tile :key="index" avatar ripple>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.url }}</v-list-tile-title>
                  <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                  <v-list-tile-sub-title>{{ item.method }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ item.data }}</v-list-tile-action-text>
                  <v-icon color="grey lighten-1">star_border</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <p>Network status is {{ network.status }}</p>
    </v-layout>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import TestRequest from '../components/TestRequest'

export default {
  components: {
    TestRequest
  },
  computed: mapState(['requests', 'requestsErrors', 'network']),
  mounted() {
    if (!process.browser) {
      return
    }

    window.addEventListener('offline', e => {
      console.warn('offline', e)
      this.$store.commit('networkStatus', 'offline')
    })

    window.addEventListener('online', e => {
      console.warn('online', e)
      this.$store.commit('networkStatus', 'online')

      // TODO replay requests here
      console.warn('Replaying failed requests')

      this.$store.state.requestsErrors.map(e =>
        this.$axios({
          method: e.method,
          url: e.url,
          data: e.data
        })
          .then(response => {
            console.warn('response', response)
            // TODO remove from failed
          })
          .catch(console.error)
      )
    })
  },
  data() {
    return {
      items: []
    }
  }
}
</script>
