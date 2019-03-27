<template>
  <div v-if="oidcIsAuthenticated">
    <div class="text-center p-2">Hello, you are logged in as USERNAME.</div>
    <b-btn block size="sm" variant="link">Settings</b-btn>
    <b-btn @click="debug()" block size="sm" variant="outline-primary">DEBUG</b-btn>
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
  computed: {
    ...mapGetters('oidcStore', ['oidcIsAuthenticated','oidcUser'])
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
    ...mapActions('oidcStore', ['authenticateOidc']),
  }
}
</script>

<style scoped>
</style>
