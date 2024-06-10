<template>
  <div id="main">
    <v-row id="mainrow" class="h-screen m-0">
      <v-col class="bg-image"></v-col>
      <v-col class="bg-diagonal">
        <v-toolbar color="transparent">
          <v-spacer></v-spacer>
          <v-btn class="text-white" variant="tonal"> Iniciar sesion </v-btn>
          <v-btn class="text-white" variant="text"> Registrarse </v-btn>
        </v-toolbar>

        <div class="mx-20">
          <h1 class="text-h1 text-white font-weight-regular">
            Estar bien no es negociable
          </h1>
          <p class="text-subtitle-1 text-white mt-5">
            Cuentanos tu problema y te ayudaremos a enconrar el mejor psicologo
            para ti.
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
</script>
<style>
#main {
  height: 100vh;
}
.bg-image {
  background-image: url("../assets/img/bg-home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: bottom;
}
.bg-diagonal {
  background: linear-gradient(to left bottom, #4a9ba7, #0d1c1e);
}
#mainrow {
  margin: 0;
}
</style>