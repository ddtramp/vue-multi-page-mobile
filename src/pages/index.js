// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import 'amfe-flexible'

if (envConfig.environment === 'production') { // global config variable
    Vue.config.productionTip = false
}
console.log('Index')

import VueCordova from 'vue-cordova'
Vue.use(VueCordova, {
    optionTestKey: 'optionTestValue'
})

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
    var cordovaScript = document.createElement('script')
    cordovaScript.setAttribute('type', 'text/javascript')
    cordovaScript.setAttribute('src', 'cordova.js')
    document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    data: function () {
        return {
            cordova: Vue.cordova
        }
    }
})
