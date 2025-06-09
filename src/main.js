import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import apiClient from "./plugins/axios";
import vuetify from "./plugins/vuetify";
import store from "./store/store";

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
app.use(store);
//axios configuration
app.config.globalProperties.$axios = apiClient;
