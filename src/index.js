module.exports = {
  Footer: require('./components/Footer/Footer.vue'),
  install(Vue){
    Vue.component('Footer', module.exports.Footer)
  }
}
