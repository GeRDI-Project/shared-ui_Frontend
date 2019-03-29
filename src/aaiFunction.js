

export const gerdiAaiFunctions = function(store) {
  let signInUser = function (ref = window.location.href) { store.dispatch('oidcStore/authenticateOidc', ref) }
  let signInUserSilent = function () { store.dispatch('oidcStore/authenticateOidcSilent') }
  let signOutUser = function () { store.dispatch('oidcStore/signOutOidc') }
  let getUser = store.getters['oidcStore/oidcUser']
  let isAuthenticated = store.getters['oidcStore/oidcIsAuthenticated']
  return {
    aai: {
      enabled: true,
      signInUser: signInUser,
      signInUserSilent: signInUserSilent,
      signOutUser: signOutUser,
      getUser: getUser,
      isAuthenticated: isAuthenticated
    }
  }
}
