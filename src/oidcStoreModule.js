import { vuexOidcCreateStoreModule } from 'vuex-oidc'
import { oidcSettings } from './config/oidc'

const oidcStore = vuexOidcCreateStoreModule(
  oidcSettings,
  {
    namespaced: true
  }
)

export default oidcStore
