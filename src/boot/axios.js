import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://sva.talana.com:8000/api/'
Vue.prototype.$axios = axios

export default axios
