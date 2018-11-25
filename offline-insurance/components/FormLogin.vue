<template>
  <v-layout row class="text-xs-center">
    <v-container style="position: relative;top: 13%;" class="text-xs-center">
      <v-card flat>
        <v-card-title primary-title>
          <h4>Login</h4>
        </v-card-title>
        <v-form>
          <v-text-field prepend-icon="person" name="Username" label="Username" v-model="username"></v-text-field>
          <v-text-field prepend-icon="lock" name="Password" label="Password" v-model="password"
                        type="password"></v-text-field>
          <v-card-actions>
            <v-btn primary large block @click="login">Login</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-container>
  </v-layout>
</template>

<script>
export default {
  name: 'FormLogin',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      return this.$axios
        .$post('https://baselhack.swisstph-mis.ch/RestApi/api/login', {
          username: this.username,
          password: this.password
        })
        .then(({ token }) => {
          this.$store.commit('accessToken', token)
          this.$router.push('addFamily')
        })
        .catch(console.error)
    }
  }
}
</script>
