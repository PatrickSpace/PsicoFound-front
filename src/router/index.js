import { createRouter, createWebHistory } from "vue-router";
import InicioencuestaView from "@/views/encuesta/InicioEncuestaView.vue";
import EncuestaView from "@/views/encuesta/EncuestaView.vue";
import PsicologosView from "@/views/PsicologosView.vue";
import PacientesView from "@/views/PacientesView.vue";
import HomeView from "@/views/HomeView.vue";
import DasboardView from "@/views/DashboardView.vue";
import LogInView from "@/views/Auth/LogIn.vue";
import SignUpview from "@/views/Auth/SingUp.vue";
import ElegirTerapeutaView from "@/views/encuesta/ElegirTerapeuta.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/registro",
      name: "registro",
      component: SignUpview,
    },
    {
      path: "/iniciarencuesta",
      name: "Inicioencuesta",
      component: InicioencuestaView,
    },
    {
      path: "/encuesta",
      name: "encuesta",
      component: EncuestaView,
    },
    {
      path: "/psicologos",
      name: "psicologos",
      component: PsicologosView,
    },
    {
      path: "/pacientes",
      name: "pacientes",
      component: PacientesView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DasboardView,
    },
    {
      path: "/login",
      name: "login",
      component: LogInView,
    },
    {
      path: "/elegirterapeuta",
      name: "elegirterapeuta",
      component: ElegirTerapeutaView,
    },
  ],
});

export default router;
