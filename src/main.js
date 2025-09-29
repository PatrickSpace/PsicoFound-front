import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import apiClient from "./plugins/axios";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";
import GoogleLogin from "vue3-google-login";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(createPinia());
app.mount("#app");

app.use(GoogleLogin, {
  clientId:
    "893443583135-7r69didose20nq5r4almppa1t5s5b849.apps.googleusercontent.com",
});

//axios configuration
app.config.globalProperties.$axios = apiClient;
