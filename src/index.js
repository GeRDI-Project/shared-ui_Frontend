import Vue from 'vue'
import StaticFootr from './Footer.vue'
import StaticNavMenu from './NavMenu.vue'

const StaticComponent =  {
    install: function (Vue, options) {
        Vue.component('static-footer', StaticFootr)
        Vue.component('static-navMenu', StaticNavMenu)
    }
}

export default StaticComponent;
