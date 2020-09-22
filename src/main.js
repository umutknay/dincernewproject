// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router'
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { ClientTable } from 'vue-tables-2';
import VueConfirmDialog from 'vue-confirm-dialog'
import Vuelidate from 'vuelidate'
import { store } from "./store"

axios.defaults.baseURL = "http://localhost:5431/api";
axios.defaults.headers.get["Accepts"] = "application/json";  //sadece json kabul

Vue.use(ClientTable);
Vue.config.productionTip = false

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
