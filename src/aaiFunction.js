export const gerdiAaiFunctions = function(store) {
  let signInUser = function (ref = window.location.origin + window.location.pathname) { store.dispatch('oidcStore/authenticateOidc', ref) }
  let signInUserSilent = function () { store.dispatch('oidcStore/authenticateOidcSilent') }
  let signOutUser = function () { store.dispatch('oidcStore/signOutOidc') }
  let getUser = function () { return store.getters['oidcStore/oidcUser'] }
  let getAccessToken = function () { return store.getters['oidcStore/oidcAccessToken'] }
  let getIdToken = function () { return store.getters['oidcStore/oidcIdToken'] }
  let isAuthenticated = function () { return store.getters['oidcStore/oidcIsAuthenticated'] }
  let isChecked = function () { return store.getters['oidcStore/oidcAuthenticationIsChecked'] }
  return {
    aai: {
      enabled: true,
      signInUser: signInUser,
      signInUserSilent: signInUserSilent,
      signOutUser: signOutUser,
      getUser: getUser,
      getAccessToken: getAccessToken,
      getIdToken: getIdToken,
      isAuthenticated: isAuthenticated,
      isChecked: isChecked
    }
  }
}
