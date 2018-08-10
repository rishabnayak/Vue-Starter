<template>
  <div class="splash">
    <div v-if="user">
      <router-link to="/notes">
        <i class="material-icons">notes</i>
      </router-link>
    </div>
    <div v-else id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
import db from '@/firebase/init.js'
export default {
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  async mounted () {
    if (!this.user) {
      var ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', {
        signInSuccessUrl: '/notes',
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
      })
    }
  }
}
</script>

<style>
.splash{
  text-align: center;
}
</style>
