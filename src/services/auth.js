// src/services/auth.js
import api from "@/plugins/axios";

export async function login({ usuario, password }) {
  const { data } = await api.post("/auth/login", { usuario, password });
  localStorage.setItem("pf_token", data.token);
  localStorage.setItem("pf_user", JSON.stringify(data.user));
  return data;
}

export async function register({ nombre, usuario, password, roles }) {
  const { data } = await api.post("/auth/register", {
    nombre,
    usuario,
    password,
    roles,
  });
  localStorage.setItem("pf_token", data.token);
  localStorage.setItem("pf_user", JSON.stringify(data.user));
  return data;
}

export function logout() {
  localStorage.removeItem("pf_token");
  localStorage.removeItem("pf_user");
}
