
<template>
  <v-layout>
    <v-flex text-xs-center>
      <img src="/v.png" alt="Vuetify.js" class="mb-5">
      <!-- <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote> -->
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
