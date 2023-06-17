import { createApp } from 'vue'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./App.vue";
import router from "./router";

import axios from 'axios';

axios.interceptors.request.use(config => {
    config.baseURL = "https://jsonplaceholder.typicode.com";
    config.withCredentials = true;

    return config;
});


createApp(App).use(router).mount('#app');
