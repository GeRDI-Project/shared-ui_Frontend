import Vue from 'vue'
import AppFooter from './AppFooter.vue'
import DocumentMedia from './DocumentMedia.vue'
import PaginationBar from './PaginationBar.vue'
import NavMenu from './NavMenu.vue'

const SharedUI =  {
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
    }
}

export default SharedUI;
