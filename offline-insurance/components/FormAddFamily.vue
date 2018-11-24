<template>
  <div class="text-xs-center">
    <!-- <v-menu transition="slide-x-transition">
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
    </v-menu> -->
    <form>
      <v-select
        v-model="region"
        :items=this.$store.state.master.locations
        :error-messages="selectErrors"
        item-text="locationName"
        item-value="locationId"
        placeholder="Ultha"
        label="Region"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>

      <v-select
        v-model="district"
        :items=districts
        :error-messages="selectErrors"
        item-text="locationName"
        item-value="locationId"
        placeholder="Baglung"
        label="District"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>

      <!--
      <v-select
        v-model="ward"
        :items="items"
        :error-messages="selectErrors"
        label="Ward"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Village"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
    -->

      <v-checkbox
        v-model="povertyStatus"
        label="Poverty status"
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>
      <v-select
        v-model="confirmationType"
        :items=this.$store.state.master.confirmationTypes
        :error-messages="selectErrors"
        label="Confirmation type"
        item-text="confirmationType"
        item-value="confirmationTypeCode"
        placeholder="State"
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-text-field
        v-model="ConfirmationNumber"
        :error-messages="nameErrors"
        label="Confirmation number"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-select
        v-model="GroupType"
        :items="items"
        :error-messages="selectErrors"
        label="Group type"
        placeholder="Item1"
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-text-field
        v-model="PermanentAddress"
        :error-messages="nameErrors"
        label="Permanent address"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
    </form>
    <form>
      <v-text-field
        v-model="InsuranceNumber"
        :error-messages="nameErrors"
        :counter="12"
        label="Insurance Number"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Firstname"
        :error-messages="nameErrors"
        label="Other Names"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="Lastname"
        :error-messages="nameErrors"
        label="Surname"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="Birthdate"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <!-- <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Village"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select> -->
      <v-select
        v-model="MaritalStatus"
        :items="items"
        :error-messages="selectErrors"
        label="Marital Status"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-checkbox
        v-model="beneficiaryCard"
        label="Beneficiary Card"
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox>

      <!--
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Current Region"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Current District"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Current Ward"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="District Village"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Current address details"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Profession"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
    -->
      <v-select
        v-model="educationLevels"
        :items=this.$store.state.master.educationLevels
        :error-messages="selectErrors"
        label="Education"
        item-text="educationLevel"
        item-value="educationLevelId"
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <!--
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Phone Number"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Email"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Identification type"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-text-field
        v-model="name"
        :error-messages="nameErrors"
        label="Identification Number"
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Region of FSP"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="District of FSP"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Level of FSP"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="First Service Point"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
    -->


      <!-- <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Item"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select> -->
      <!-- <v-checkbox
        v-model="checkbox"
        :error-messages="checkboxErrors"
        label="Do you agree?"
        required
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
      ></v-checkbox> -->

      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'

//import { mapState } from 'vuex'

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val
      }
    }
  },

  data: () => ({
    name: '',
    email: '',
    select: null,
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    checkbox: false,
    district: null,
    region: null,
    beneficiaryCard: null,
    educationLevels: null,
    povertyStatus: null,
    confirmationType: null,
    ConfirmationNumber: null,
    GroupType: null,
    PermanentAddress: null,
    InsuranceNumber: null,
    FirstName: null,
    LastName: null,
    MaritalStatus: null
  }),

  computed: {
    districts() {
      const loc = this.$store.state.master.locations
      var districts
      /*const districts = this.$store.state.master.locations.filter(
        el => parseInt(el.locationId) == parseInt(this.region)
      ).locations*/
      var l

      for (l of loc) {
        //console.log('L' + l.locationId)
        if (l.locationId == this.region) {
          districts = l.locations
        }
      }
      return districts
    },
    checkboxErrors() {
      const errors = []
      // if (!this.$v.checkbox.$dirty) return errors
      // !this.$v.checkbox.checked && errors.push('You must agree to continue!')
      return errors
    },
    selectErrors() {
      const errors = []
      // if (!this.$v.select.$dirty) return errors
      // !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    nameErrors() {
      const errors = []
      // if (!this.$v.name.$dirty) return errors
      // !this.$v.name.maxLength &&
      //   errors.push('Name must be at most 10 characters long')
      // !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors() {
      const errors = []
      // if (!this.$v.email.$dirty) return errors
      // !this.$v.email.email && errors.push('Must be valid e-mail')
      // !this.$v.email.required && errors.push('E-mail is required')
      return errors
    }
  },

  methods: {
    submit() {
      this.$v.$touch()
      console.log('this:' + this)
      /*this.$axios
        .post(
          'https://baselhack.swisstph-mis.ch/RestApi/api/family/',
          this
        )
        .then(console.warn)
        .catch(console.error)
        */
    },
    clear() {
      this.$v.$reset()
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = false
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
