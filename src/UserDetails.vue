<template>
  <div v-if="oidcIsAuthenticated">
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
    this.authenticateOidcSilent()
  },
  computed: {
    ...mapGetters('oidcStore', ['oidcIsAuthenticated','oidcUser']),
    username: function() {
      if (this.oidcIsAuthenticated && typeof this.oidcUser.given_name !== 'undefined') {
        return ' ' + this.oidcUser.given_name
      } else {
        return ''
      }
    }
  },
  methods: {
    closeUsrPopover() {
      this.usrPopover = false
    },
    auth: function() {
      this.authenticateOidc(window.location.pathname)
    },
    debug: function() {
      console.log(this.oidcUser)
    },
    signOut: function () {
      this.signOutOidc()
    },
    ...mapActions('oidcStore', ['authenticateOidc', 'authenticateOidcSilent', 'signOutOidc']),
  }
}
</script>

<style scoped>
</style>
