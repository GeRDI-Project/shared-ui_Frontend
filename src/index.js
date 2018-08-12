import Vue from 'vue'
import AppFooter from './AppFooter.vue'
import DocumentMedia from './DocumentMedia.vue'
import PaginationBar from './PaginationBar.vue'

const StaticComponent =  {
    install: function (Vue, options) {
        Vue.component('app-footer', AppFooter)
        Vue.component('document-media', DocumentMedia)
        Vue.component('paginationBar', PaginationBar)
    }
}

export default StaticComponent;
