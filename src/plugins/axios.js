import axios from "axios";

// Configuración de Axios
const apiClient = axios.create({
  baseURL: "http://localhost:3001/api", // Define la URL base
  timeout: 60000, // 60 segundos de timeout
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

// Agregar el token de autenticación si existe
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["x-access-token"] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Manejo de respuestas y errores
apiClient.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

export default apiClient;
