// src/services/auth.js
import api from "@/plugins/axios";

export async function login({ email, password }) {
  const { data } = await api.post("/auth/login", { email, password });
  localStorage.setItem("pf_token", data.token);
  localStorage.setItem("pf_user", JSON.stringify(data.user));
  return data;
}

export async function register({ name, email, password, role }) {
  const { data } = await api.post("/auth/register", {
    name,
    email,
    password,
    role,
  });
  localStorage.setItem("pf_token", data.token);
  localStorage.setItem("pf_user", JSON.stringify(data.user));
  return data;
}

export function logout() {
  localStorage.removeItem("pf_token");
  localStorage.removeItem("pf_user");
}
