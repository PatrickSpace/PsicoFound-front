<script setup>
const valid = true;
var usuario = "";
var contrasena ="";
</script>
<template>
  <v-theme-provider theme="dark">  
    <v-form v-model="valid" class="text-white">
      <v-container class="px-0">
        <v-text-field
        :v-model="usuario"
        :counter="10"
        label="Usuario"
        required
        ></v-text-field>
        <v-text-field
        :v-model="contrasena"
        :counter="10"
        label="Contraseña"
        required
        ></v-text-field>
        <v-btn block class="my-5" elevation="4" variant="tonal" size="x-large">
          Iniciar Sesion
          <template v-slot:append>
              <v-icon>mdi-arrow-right</v-icon>
          </template>
        </v-btn>
      </v-container>
    </v-form>
    <v-divider color="white"></v-divider>
    <v-btn id="google" block class="my-5 text-white bg-google " elevation="4" variant="tonal" size="x-large">
          Iniciar sesion con Google
          <template v-slot:prepend>
              <v-icon>mdi-google</v-icon>
          </template>
        </v-btn>
        <v-btn id="facebook" block class="my-5 text-white bg-facebook" elevation="4" variant="tonal" size="x-large">
          Iniciar sesion con Facebook
          <template v-slot:prepend>
              <v-icon>mdi-facebook</v-icon>
          </template>
        </v-btn>
        <v-btn id="apple" block class="my-5 text-white" variant="tonal" size="x-large">
          Iniciar sesion con Apple
          <template v-slot:prepend>
              <v-icon>mdi-apple</v-icon>
          </template>
        </v-btn>
  </v-theme-provider>
</template>
<style>
#google{
  background: rgb(137, 0, 11);
background: linear-gradient(90deg, rgba(168,0,14,1) 0%, rgba(255,255,255,0) 65%);
}
#facebook{
  background: rgb(0, 76, 168);
  background: linear-gradient(90deg, rgb(0, 50, 199) 0%, rgba(255,255,255,0) 65%);
}
#apple{
  background: rgb(7, 0, 1);
  background: linear-gradient(90deg, rgb(0, 0, 1) 0%, rgba(255,255,255,0) 65%);
}
</style>