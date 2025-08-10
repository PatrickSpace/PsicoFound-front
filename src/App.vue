<template>
  <v-app>
    <!-- Contenido principal -->
    <RouterView />

    <!-- Snackbar global para errores de API -->
    <v-snackbar
      v-model="snack.open"
      :timeout="snack.timeout"
      location="top right"
    >
      <div class="d-flex flex-column">
        <span class="text-subtitle-2">{{ snack.title }}</span>
        <span>{{ snack.message }}</span>
        <span v-if="snack.extra" class="text-caption">{{ snack.extra }}</span>
      </div>
      <template #actions>
        <v-btn variant="text" @click="snack.open = false">Cerrar</v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { RouterView } from "vue-router";

// Estado del snackbar global
const snack = ref({
  open: false,
  timeout: 4000,
  title: "",
  message: "",
  extra: "", // método y URL
});

// Listener del evento global emitido por axios.js: `window.dispatchEvent(new CustomEvent('api-error', { detail }))`
const onApiError = (e) => {
  const err = e?.detail ?? {};
  snack.value.title = err.status ? `Error ${err.status}` : "Error";
  snack.value.message = err.message || "Ha ocurrido un error";
  snack.value.extra = err.method && err.url ? `${err.method} ${err.url}` : "";
  snack.value.open = true;
};

onMounted(() => window.addEventListener("api-error", onApiError));
onBeforeUnmount(() => window.removeEventListener("api-error", onApiError));
</script>

<style>
html,
body,
#app {
  height: 100%;
}
#app {
  padding: 0;
  width: 100%;
  overflow-y: hidden;
}
a {
  background-color: transparent;
}
</style>
