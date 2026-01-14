<template>
  <v-app class="screen h-screen">
    <v-app-bar app class="px-15" color="transparent" dark :elevation="0">
      <v-app-bar-title class="text-white">
        <MainLogo />
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn @click="buscarnuevosterapeutas()" append-icon="mdi-arrow-left" class="text-white text-body-1 my-5" variant="text" size="large">
        Reiniciar busqueda
      </v-btn>
      <v-btn append-icon="mdi-refresh" class="text-white text-body-1 my-5" variant="text" size="large">
        Explorar otras opciones
      </v-btn>
      <v-btn append-icon="mdi-arrow-top-right" class="text-white text-body-1 my-5" variant="text" size="large"
        to="psicologos">
        Buscar terapeuta por nombre
      </v-btn>
    </v-app-bar>
    <v-main>
      <TerapeutaCarrusel :terapeutas="therapists"/>
    </v-main>
  </v-app>
</template>

<script setup>
import MainLogo from "@/components/Common/MainLogo.vue";
import TerapeutaCarrusel from "@/components/encuesta/TerapeutaCarrusel.vue";
import { useTerapiaStore } from "@/store/terapiaStore";
import { ref } from "vue";
const terapiaStore = useTerapiaStore();
const therapists = ref([]);

function buscarnuevosterapeutas() {
  console.log("Buscando nuevos terapeutas...");
  terapiaStore.buscarterapeutaejemplo()
  console.log("Terapeutas encontrados en vista:", terapiaStore.getTopTerapeutas());
  therapists.value = terapiaStore.getTopTerapeutas();
}

</script>
<style></style>