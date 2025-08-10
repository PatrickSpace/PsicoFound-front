import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import apiClient from "./plugins/axios";
import vuetify from "./plugins/vuetify";
import { createPinia } from "pinia";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.use(createPinia());
app.mount("#app");
//axios configuration
app.config.globalProperties.$axios = apiClient;
