import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import User from "./Helpers/User";

import axios from 'axios'

window.axios = axios;

window.User = User;

axios.defaults.baseURL = 'http://localhost/laravel-starter/api';

axios.defaults.headers = {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': "application/json",
    'Accept': "application/json",
    // 'app-key': "SOFTZINO",
    // 'app-secret': "base64:CXJ9JiHEr53jVenUWitEIhvZh4fiMEBTb9rjvVk2dS0="

}

createApp(App).use(router).mount('#app')
