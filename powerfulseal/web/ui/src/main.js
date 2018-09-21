/*
 * Copyright 2018 Bloomberg Finance L.P.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import '../scss/style.scss'
import '../node_modules/highlight.js/styles/github-gist.css'
import VueHighlightJS from 'vue-highlightjs'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faSpinner, faSync, faRobot, faAlignJustify, faCog, faServer, faDatabase} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(faSpinner, faSync, faRobot, faAlignJustify, faCog, faServer, faDatabase)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

// Retrieve custom variables from the DOM, overriding the default configuration
// if a JSON object under ID 'config' is present
let config = {
  'baseUrl': 'http://localhost:9090/api'
}

const baseUrlInput = document.getElementById('baseUrl')
if (baseUrlInput !== null && baseUrlInput.value !== '{{ baseUrl }}') {
  config.baseUrl = baseUrlInput.value
}

Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
