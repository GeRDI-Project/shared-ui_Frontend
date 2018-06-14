import Vue from 'vue'
import UserPop from './Header.vue'

export default {
    install(Vue, options) {
        Vue.component('user-pop', UserPop)
    }
}
