<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal"><router-link to="/">Vue Starter</router-link></h5>
      <nav v-if="user" class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark"><router-link to="/home">Home</router-link><span class="sr-only">(current)</span></a>
        <a class="p-2 text-dark"><router-link to="/profile">Profile</router-link></a>
      </nav>
      <a v-if="user" class="btn btn-outline-primary" @click="signOut()">Logout</a>
    </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init.js'
export default {
  name: 'navigation',
  computed:{
    user () {
      return this.$store.state.user
    }
  },
  methods: {
    async signOut () {
      const mydb = db.collection('users').doc(this.user.uid)
      await mydb.set({
        state: "online"
      },{ merge: true })
      await this.$store.dispatch('logOut')
      this.$router.push('/')
    }
  },
  data () {
    return {
    }
  }
}
</script>
