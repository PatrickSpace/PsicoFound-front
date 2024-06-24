<template>
  <v-app class="bg-diagonal h-screen">
    <v-app-bar app class="px-15" color="transparent" dark :elevation="0">
      <v-app-bar-title class="text-white">PsicoFound</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn
        append-icon="mdi-arrow-top-right"
        class="text-white text-body-1 my-5"
        variant="text"
        size="large"
      >
        Buscar terapeuta por nombre
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-stepper bg-color="transparent" flat color="white" non-linear>
          <v-stepper-header class="text-white" flat>
            <v-stepper-item value="1" editable color="white">
              Select campaign settings
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item value="2" editable>
              Create an ad group
            </v-stepper-item>

            <v-divider></v-divider>

            <v-stepper-item value="3" editable> Create an ad </v-stepper-item>
          </v-stepper-header>
          <v-stepper-window>
            <v-stepper-content value="1">
              <v-card>
                <v-card-title>Step 1</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
              </v-card>
            </v-stepper-content>
            <v-stepper-content value="2">
              <v-card>
                <v-card-title>Step 2</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
              </v-card>
            </v-stepper-content>
            <v-stepper-content value="3">
              <v-card>
                <v-card-title>Step 3</v-card-title>
                <v-card-text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </v-card-text>
              </v-card>
            </v-stepper-content>
          </v-stepper-window>
          <v-stepper-actions></v-stepper-actions>
        </v-stepper>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "EncuestaView",
};
</script>

<style scoped>
.bg-diagonal {
  background: linear-gradient(to left bottom, #4a9ba7, #0d1c1e);
}
</style>