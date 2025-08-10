import axios from "axios";

// Configuración de Axios (Frontend)
// Lee VITE_API_URL del entorno y cae a un valor por defecto para desarrollo.
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? "http://localhost:3000/api",
  timeout: 60000, // 60 segundos de timeout
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: false,
});

// ---- Normalizador de errores Axios
function normalizeAxiosError(error) {
  const status = error?.response?.status ?? 0;
  const data = error?.response?.data ?? {};
  const config = error?.config ?? {};

  // Intentar construir un mensaje claro
  let message =
    data?.message || data?.error || error?.message || "Error desconocido";

  // Validaciones (422) con express-validator u otros
  if (Array.isArray(data?.errors) && data.errors.length) {
    const parts = data.errors.map(
      (e) => e?.msg || e?.message || `${e?.param ?? ""}`.trim()
    );
    const unique = Array.from(new Set(parts.filter(Boolean)));
    if (unique.length) message = unique.join(" • ");
  }

  // Timeout o red de Axios
  if (error?.code === "ECONNABORTED") {
    message = "Tiempo de espera agotado. Intenta de nuevo.";
  } else if (!error?.response) {
    message = "No se pudo conectar con el servidor. Revisa tu conexión.";
  }

  return {
    status,
    message,
    code: error?.code,
    url: config?.url,
    method: (config?.method || "").toUpperCase(),
    raw: error,
    data,
  };
}

// Interceptor de solicitud: agrega Authorization Bearer si existe token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("pf_token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuesta: manejo estándar de errores y sesión
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const normalized = normalizeAxiosError(error);
    const status = normalized.status;

    if (status === 401 || status === 403) {
      // Sesión inválida/expirada: limpiar estado local y redirigir a login
      try {
        localStorage.removeItem("pf_token");
        localStorage.removeItem("pf_user");
      } catch (_) {}
      if (typeof window !== "undefined") {
        const current = encodeURIComponent(
          window.location.pathname + window.location.search
        );
        window.location.href = `/login?next=${current}&session=expired`;
      }
    }

    // Emitir evento global para que la UI (snackbar/toast) pueda reaccionar
    try {
      if (typeof window !== "undefined") {
        window.dispatchEvent(
          new CustomEvent("api-error", { detail: normalized })
        );
      }
    } catch (_) {}

    return Promise.reject(normalized);
  }
);

apiClient.normalizeError = normalizeAxiosError;
export default apiClient;
