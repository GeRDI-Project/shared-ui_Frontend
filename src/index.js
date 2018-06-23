import Vue from 'vue'
import StaticFootr from './Footer.vue'

const previewComponent =  {
    install: function (Vue, options) {
        Vue.component('static-footer', StaticFootr)
    }
}

export default previewComponent;
