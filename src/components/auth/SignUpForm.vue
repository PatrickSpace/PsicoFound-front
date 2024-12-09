<template>
  <div>
    <v-btn block class="my-5 bg-transparent" color="white" elevation="4" variant="tonal" size="large" to="/dashboard">
      Iniciar Sesion
      <template v-slot:append>
        <v-icon>mdi-arrow-right</v-icon>
      </template>
    </v-btn>
    <v-btn id="google" block class="my-5 text-white bg-google text-left" elevation="4" variant="tonal" size="large"
      jutify-start>
      Iniciar sesion con Google
      <template v-slot:prepend>
        <v-icon>mdi-google</v-icon>
      </template>
    </v-btn>
    <v-btn id="facebook" block class="my-5 text-white bg-facebook" elevation="4" variant="tonal" size="large">
      Iniciar sesion con Facebook
      <template v-slot:prepend>
        <v-icon>mdi-facebook</v-icon>
      </template>
    </v-btn>
    <v-btn id="apple" block class="my-5 text-white" variant="tonal" size="large" elevation="4">
      Iniciar sesion con Apple
      <template v-slot:prepend>
        <v-icon>mdi-apple</v-icon>
      </template>
    </v-btn>
  </div>
</template>
<script setup></script>