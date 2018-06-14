import Vue from 'vue'
import Header from './Header.vue'

export default {
    install(Vue, options) {
        Vue.component('header', Header)
    }
}
