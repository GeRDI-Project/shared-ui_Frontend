<template>
  <div v-if="isAuthenticated">
    <div class="text-center p-2">Hello{{ userName }}, you are logged in.</div>
    <b-btn @click="debug()" block size="sm" variant="outline-primary">DEBUG</b-btn>
    <b-btn @click="signOut()" block size="sm" variant="outline-primary">Sign out</b-btn>
  </div>
  <div v-else>
    <div class="text-center p-2">Hello, you are currently not logged in.</div>
    <b-btn @click="auth()" block size="sm" variant="outline-primary">Log me in</b-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
/* eslint-disable */
export default {
  name: 'nav-menu',
  data() {
    return {
      usrPopover: false
    }
  },
  created: function () {
    this.$gerdi.aai.signInUserSilent()
  },
  computed: {
    username: function() {
      if (this.isAuthenticated && typeof this.this.$gerdi.aai.getUser.given_name !== 'undefined') {
        return ' ' + this.this.$gerdi.aai.getUser.given_name
      } else {
        return ''
      }
    },
    isAuthenticated: function () {
      this.$gerdi.aai.isAuthenticated
    }
  },
  methods: {
    closeUsrPopover() {
      this.usrPopover = false
    },
    auth: function() {
      this.$gerdi.aai.signInUser()
    },
    debug: function() {
      console.log(this.$gerdi.aai.getUser)
    },
    signOut: function () {
      this.signOut()
    }
  }
}
</script>

<style scoped>
</style>
