// src/stores/auth.js
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import {
  login as apiLogin,
  register as apiRegister,
  logout as apiLogout,
} from "@/services/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: useStorage("pf_token", ""), // persistente + reactivo
    user: useStorage("pf_user", null), // { id, name, email, role }
  }),
  getters: {
    isLogged: (state) => !!state.token,
    role: (state) => state.user?.role ?? "guest",
  },
  actions: {
    async login(payload) {
      const { token, user } = await apiLogin(payload);
      this.token = token;
      this.user = user;
    },
    async register(payload) {
      const { token, user } = await apiRegister(payload);
      this.token = token;
      this.user = user;
    },
    logout() {
      apiLogout(); // limpia en backend si aplica
      this.token = "";
      this.user = null;
    },
  },
});
