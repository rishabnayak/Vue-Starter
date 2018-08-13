<template>
  <div class="container">
            <h4 class="mb-3">User Profile</h4>
            <form v-if="user">
              <div class="mb-3">
                <label for="bio">Short Introduction</label>
                <textarea class="form-control" rows="5" id="bio" v-model="bio"></textarea>
              </div>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="city">City</label>
                  <input type="text" class="form-control" id="city" v-model="city">
                </div>
                <div class="col-md-4 mb-3">
                  <label for="state">State</label>
                  <input type="text" class="form-control" id="state" v-model="stt">
                </div>
                <div class="col-md-4 mb-3">
                  <label for="country">Country</label>
                  <input type="text" class="form-control" id="country" v-model="country">
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 mb-3">
                  <label for="number">Phone Number</label>
                  <input type="text" class="form-control" id="number" v-model="number">
                </div>
                <div class="col-md-4 mb-3">
                  <label for="affiliation">Current Affiliation</label>
                  <input type="text" class="form-control" id="affiliation" placeholder="University/College/Company" v-model="affiliation">
                </div>
              </div>
              <hr class="mb-4">
            </form>
            <button class="btn btn-primary btn-lg btn-block col-md-3" type="submit" @click="updateProfile()">Update</button>
          </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init.js'
export default {
  name: 'profile',
  props: ['messages'],
  computed:{
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    async updateProfile () {
      const ref = db.collection('users').doc(this.user.uid)
      await ref.set({
        bio: this.bio,
        city: this.city,
        stt: this.stt,
        country: this.country,
        number: this.number,
        affiliation: this.affiliation
      },{ merge: true })
      this.$router.push('/profile')
    }
  },
  data () {
    return {
      bio: null,
      city: null,
      stt: null,
      country: null,
      number: null,
      affiliation: null
    }
  },
  async created(){
    this.bio = this.user.bio
    this.city = this.user.city
    this.stt = this.user.stt
    this.country = this.user.country
    this.number = this.user.number
    this.affiliation = this.user.affiliation
  }
}
</script>

<style>
.container{
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
