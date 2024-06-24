import { createRouter, createWebHistory } from "vue-router";
import InicioencuestaView from "@/views/encuesta/InicioEncuestaView.vue";
import EncuestaView from "@/views/encuesta/EncuestaView.vue";
import PsicologosView from "@/views/PsicologosView.vue";
import PacientesView from "@/views/PacientesView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
  ],
});

export default router;
