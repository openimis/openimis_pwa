<template>
  <div class="text-xs-center">
    <form>
      <v-select v-model="selectedRegion"
        :items=this.$store.state.master.locations
        :error-messages="selectErrors"
        item-text="locationName"
        item-value="locationId"
        placeholder="Select the region"
        label="Region"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()">
      </v-select>

      <v-select
        v-model="selectedDistrict"
        :items=districts
        :error-messages="selectErrors"
        item-text="locationName"
        item-value="locationId"
        placeholder="Select the district"
        label="District"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="selectedWard"
        :items="wards"
        :error-messages="selectErrors"
        item-text="locationName"
        item-value="locationId"
        placeholder="Select the ward"
        label="Ward"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
      <v-select
        v-model="addFamilyForm.locationId"
        :items="villages"
        :error-messages="selectErrors"
        item-text="locationName"
        item-value="locationId"
        placeholder="Select the village"
        label="Village"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
    
      <!--<v-select
        v-model="educationLevels"
        :items=this.$store.state.master.educationLevels
        :error-messages="selectErrors"
        label="Education"
        item-text="educationLevel"
        item-value="educationLevelId"
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select>
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
        v-model="FirstName"
        :error-messages="nameErrors"
        label="Other Names"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="LastName"
        :error-messages="nameErrors"
        label="Surname"
        required
        @input="$v.name.$touch()"
        @blur="$v.name.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="BirthDate"
        :error-messages="emailErrors"
        label="Birthdate"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>-->
      <!-- <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Village"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()"
      ></v-select> -->
      <!--<v-select
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
      ></v-checkbox>-->

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
    addFamilyForm: {
      beneficiaryCard: '',
      BirthDate: '01-02-1980',
      checkbox: false,
      ConfirmationNumber: null,
      confirmationType: null,
      district: null,
      educationLevels: null,
      email: '',
      FirstName: 'Emma',
      GroupType: null,
      InsuranceNumber: null,
      items: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
      LastName: 'Muster',
      MaritalStatus: null,
      name: '',
      PermanentAddress: null,
      povertyStatus: null,
      locationId: null,
      select: null
    },
    regions: [],
    districts: [],
    wards: [],
    villages: [],
    selectedRegion: '',
    selectedDistrict: '',
    selectedWard: ''
  }),
  watch: {
    selectedRegion: function() {
      this.districts = []
      this.wards = []
      this.villages = []
      if (this.selectedRegion > 0) {
        this.districts = this.$store.state.master.locations.find(location => {
          return location.locationId === this.selectedRegion
        }).locations
      }
    },
    selectedDistrict: function() {
      this.wards = []
      this.villages = []
      if (this.selectedDistrict > 0) {
        this.wards = this.$store.state.master.locations
          .find(location => {
            return location.locationId === this.selectedRegion
          })
          .locations.find(location => {
            return location.locationId === this.selectedDistrict
          }).locations
      }
    },
    selectedWard: function() {
      this.villages = []
      if (this.selectedWard > 0) {
        this.villages = this.$store.state.master.locations
          .find(location => {
            return location.locationId === this.selectedRegion
          })
          .locations.find(location => {
            return location.locationId === this.selectedDistrict
          })
          .locations.find(location => {
            return location.locationId === this.selectedWard
          }).locations
      }
    }
  },
  computed: {
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
  //mounted: {
  //  document.onreadystatechange = () => {
  //    if (document.readyState == "complete") {
  //      regions = this.$store.state.master.locations;
  //    }
  //  }
  //},
  methods: {
    //districts() {
    //  console.log("Districticts...");
    //  const loc = this.$store.state.master.locations
    //  var districts
    //  /*const districts = this.$store.state.master.locations.filter(
    //    el => parseInt(el.locationId) == parseInt(
    //  var lthis.region)
    //  ).locations*/

    //  for (l of loc) {
    //    //console.log('L' + l.locationId)
    //    if (l.locationId == this.region) {
    //      districts = l.locations
    //    }
    //  }
    //  return districts
    //},
    submit() {
      this.$v.$touch()

      console.warn(this.$store.state.network.status)
      // meybe here if its offline move to errors strait on ?

      this.$axios
        .post(
          'https://baselhack.swisstph-mis.ch/RestApi/api/family/',
          {
            beneficiaryCard: this.beneficiaryCard,
            BirthDate: '01-02-1980',
            checkbox: this.checkbox,
            ConfirmationNumber: this.ConfirmationNumber,
            confirmationType: this.confirmationType,
            district: this.district,
            educationLevels: this.educationLevels,
            email: this.email || '',
            FirstName: this.FirstName,
            GroupType: this.GroupType,
            InsuranceNumber: this.InsuranceNumber,
            // items: this.items, ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
            LastName: this.LastName,
            MaritalStatus: this.MaritalStatus,
            name: this.name,
            PermanentAddress: this.PermanentAddress,
            povertyStatus: this.povertyStatus,
            region: this.region
            // select: this.select
          },
          {
            timeout: 1000
          }
        )
        .then(console.warn)
        .catch(console.error)
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
