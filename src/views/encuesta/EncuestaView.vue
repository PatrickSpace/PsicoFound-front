<template>
  <v-app class="bg-diagonal h-screen">
    <v-app-bar app class="px-15" color="transparent" dark :elevation="0">
      <v-app-bar-title class="text-white">
        <MainLogo />
      </v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn append-icon="mdi-arrow-top-right" class="text-white text-body-1 my-5" variant="text" size="large"
        to="psicologos">
        Buscar terapeuta por nombre
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <EncuestaTree />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import MainLogo from "@/components/Common/MainLogo.vue";
import EncuestaTree from "@/components/encuesta/EncuestaTree.vue";
</script>

<style scoped>
.bg-diagonal {
  background: linear-gradient(to left bottom, #4a9ba7, #0d1c1e);
}

a {
  text-decoration: none;
  color: white;
  transition: color 0.3s;
  background-color: transparent;
}
</style>