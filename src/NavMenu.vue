<template>
<div>
  <b-alert show variant="dark">This is the current release of the Generic Research Data Infrastructure in an alpha
    stage. Selected basic functions are already usable. They are based on the latest technologies and are often still
    in an experimental stage. Please note that due to ongoing implementation, interruptions or unavailability of
    individual features and services may occur.</b-alert>
  <b-navbar toggleable="md" variant="faded" type="light">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#">
      <img src="./assets/logo_alpha.svg" id="logo" height="70px" class="d-inline-block align-top" alt="BV">
    </b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="/">Search</b-nav-item>
        <b-nav-item href="/bookmark">Bookmark</b-nav-item>
        <b-nav-item href="#">Store</b-nav-item>
        <b-nav-item href="#" disabled>Process</b-nav-item>
        <b-nav-item href="#" disabled>Analyze</b-nav-item>
        <b-nav-item href="#" disabled>Submit</b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav v-if="isAaiEnabled" class="ml-auto">
        <b-nav-item href="#" id="usr-popover" v-if="isAuthChecked && user !== null">Hello, {{ username }}</b-nav-item>
        <b-popover v-if="isAuthChecked && user !== null" triggers="focus" ref="popover" :show.sync="usrPopover" target="usr-popover">
          <b-button @click="closeUsrPopover()" class="close" aria-label="Close" variant="link">
            <span class="d-inline-block" aria-hidden="true">&times;</span>
          </b-button>
          <user-details/>
        </b-popover>
        <b-nav-item href="#" @click="login()" v-if="isAuthChecked && user === null">Log in</b-nav-item>
        <b-nav-item v-if="!isAuthChecked"><b-spinner small label="Loading..."></b-spinner></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import UserDetails from './UserDetails.vue'
/* eslint-disable */
export default {
  name: 'nav-menu',
  components: {
    UserDetails
  },
  data() {
    return {
      usrPopover: false
    }
  },
  created: function () {
    this.$gerdi.aai.signInUserSilent()
  },
  computed: {
    isAaiEnabled: function () {
      return this.$gerdi.aai.enabled
    },
    isAuthChecked: function () {
      return this.$gerdi.aai.isChecked()
    },
    user: function () {
      return this.$gerdi.aai.getUser()
    },
    username: function () {
      return this.user.given_name
    }
  },
  methods: {
    closeUsrPopover() {
      this.usrPopover = false
    },
    login() {
      this.$gerdi.aai.signInUser()
    }
  }
}
</script>

<style scoped>
.alert {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 110;
  line-height: 1.1;
  letter-spacing: 0.1px;
  margin-bottom: 0;
}

.navbar-nav > .nav-item {
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 0.1px;
  padding: 0;
  margin-top: 50px;
  color: #083f64;
}
</style>
