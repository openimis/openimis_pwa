<template>
  <v-app dark>
    <v-navigation-drawer
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>


    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-toolbar-title v-text="network.status"></v-toolbar-title>
      <v-spacer></v-spacer>

    </v-toolbar>


    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon light>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'apps', title: 'About', to: '/' },
        { icon: 'bubble_chart', title: 'Family', to: '/addFamily' },
        { icon: 'bubble_chart', title: 'Admin', to: '/admin' }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tanzania offline insurance'
    }
  },

  computed: mapState(['network']),

  mounted() {
    if (!process.browser) {
      return
    }

    Notification.requestPermission()

    window.addEventListener('offline', () =>
      this.$store.commit('networkStatus', 'offline')
    )

    window.addEventListener('online', () =>
      this.$store.commit('networkStatus', 'online')
    )
  }
}
</script>
