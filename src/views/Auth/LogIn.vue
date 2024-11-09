<script setup>
import Loginform from "@/components/auth/LoginForm.vue";
</script>
<template>
  <div>
    <v-row class="ma-0 h-screen">
      <v-col class="bg-image"></v-col>
      <v-col class="bg-diagonal">
        <v-row class="h-screen">
          <v-col cols="12" class="d-flex" align-self="start">
            <v-toolbar color="transparent">
              <v-spacer></v-spacer>
              <v-btn class="text-white" variant="text"> Registrarse </v-btn>
            </v-toolbar>
          </v-col>

          <v-col cols="3"></v-col>
          <v-col cols="6" class="">
            <h5
              class="text-h5 text-white mb-10 font-weight-black text-decoration-underline"
            >
              PsicoFound
            </h5>
            <p class="text-h4 font-weight-medium text-white w-75">
              Iniciar sesion
            </p>
            <Loginform />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.bg-image {
  background-image: url("@/assets/img/bg-home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
}
.bg-diagonal {
  background: linear-gradient(to left bottom, #4a9ba7, #0d1c1e);
}
</style>