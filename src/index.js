import Vue from 'vue'
import AppFooter from './AppFooter.vue'
import DocumentMedia from './DocumentMedia.vue'
import PaginationBar from './PaginationBar.vue'
import NavMenu from './NavMenu.vue'
import oidcStore from './oidcStoreModule'
import {gerdiAaiFunctions} from './aaiFunction'

export const sharedUI = {
    install: function (Vue, options) {
        if (Vue._gerdi_shared_ui) {
            return
        }

        Vue._gerdi_shared_ui = true

        // Register component
        Vue.component('app-footer', AppFooter)
        Vue.component('document-media', DocumentMedia)
        Vue.component('paginationBar', PaginationBar)
        Vue.component('nav-menu', NavMenu)

        // Register util plugin

        // Register router module
        if (typeof options.store === 'undefined') {
          Vue.prototype.$gerdiAai = { enabled: false }
          return // If there is no store, register nothing
        }
        options.store.registerModule('oidcStore', oidcStore)
        Vue.prototype.$gerdi = gerdiAaiFunctions(options.store)
    }
}

export default sharedUI;
