<template>
  <div id="main">
    <v-row id="mainrow" class="h-screen m-0">
      <v-col class="bg-image"></v-col>
      <v-col class="bg-diagonal h-auto">
        <v-row>
          <v-col cols="2"></v-col>
          <v-col cols="10">
            <v-row class="h-screen" justify="center">
              <v-col cols="12" class="d-flex" align-self="start">
                <v-toolbar color="transparent">
                  <v-spacer></v-spacer>
                  <v-btn class="text-white" variant="tonal" rounded="0">
                    Iniciar sesion
                  </v-btn>
                  <v-btn class="text-white" variant="text"> Registrarse </v-btn>
                </v-toolbar>
              </v-col>

              <v-col cols="12" class="d-block" align-self="center">
                <h5
                  class="text-h5 text-white mb-10 font-weight-black text-decoration-underline"
                >
                  PsicoFound
                </h5>
                <p class="text-h2 font-weight-medium text-white w-75">
                  Estar bien no es negociable
                </p>
                <p class="text-body-1 text-white w-50 mt-5 mb-15">
                  Cuentanos tu problema y nosotros te ayudaremos a encontrar el
                  mejor terapeuta para ti
                </p>
                <v-btn
                  class="text-white mb-15"
                  rounded="0"
                  variant="tonal"
                  append-icon="mdi-arrow-right"
                  size="x-large"
                  to="/iniciarencuesta"
                >
                  Encuentra a tu terapeuta
                </v-btn>
              </v-col>
              <v-col cols="12" class="d-flex my-5" align-self="end">
                <v-btn
                  append-icon="mdi-arrow-top-right"
                  class="text-white text-body-1"
                  variant="text"
                  size="x-large"
                >
                  Ya cuento con un terapeuta
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
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