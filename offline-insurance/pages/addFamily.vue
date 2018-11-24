<!--TODO maybe remove this ?-->
<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <FormAddFamily></FormAddFamily>
      <FormAddFamilyMember></FormAddFamilyMember>
    </v-flex>
  </v-layout>
</template>
<script>
import FormAddFamily from '~/components/FormAddFamily'
import FormAddFamilyMember from '../components/FormAddFamilyMember'

export default {
  components: {
    FormAddFamilyMember,
    FormAddFamily
  },
  data() {
    return {
      // requests: this.$store.requests
    }
  }
}
</script>
