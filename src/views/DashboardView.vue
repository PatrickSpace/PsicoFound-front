<template>
  <LayoutDefault layout>
    <v-container>
      <h1 class="text-h4">Bienvenido</h1>
      <v-divider class="my-5 mx-auto"></v-divider>
      <v-card class="pa-2 card-backgoundcustom" id="container" elevation="2">
        <v-card-item>
          <v-card-title class="text-h5"> Tu progreso </v-card-title>
          <v-card-subtitle>
            Te felicitamos por seguir con tu terapia, aqui tienes algunos datos
            relevantes:
          </v-card-subtitle>
        </v-card-item>
        <v-card-text class="pb-0">
          <v-row class="text-center py-5">
            <v-col cols="4">
              <div>
                <h3 class="text-h4">6</h3>
                <p>Semanas de racha</p>
              </div>
            </v-col>
            <v-col cols="4">
              <div>
                <h3 class="text-h4">6</h3>
                <p>Semanas de racha</p>
              </div>
            </v-col>
            <v-col cols="4">
              <div>
                <h3 class="text-h4">6</h3>
                <p>Semanas de racha</p>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
          <v-card-actions class="my-2">
            <v-btn color="" class="px-3" rounded="sm" variant="text">Mas infromación</v-btn>
          </v-card-actions>
        </v-card-text>
      </v-card>

      <v-card class="pa-2 my-5 card-backgoundcustom" elevation="2" variant="text"
        href="https://github.com/vuetifyjs/vuetify/">
        <v-card-title class="text-h5">
          Tu terapeuta <v-icon size="small">mdi-open-in-new</v-icon>
        </v-card-title>
        <v-card-text>
          <v-divider></v-divider>
          <v-list-item class="w-150 pt-5">
            <template v-slot:prepend>
              <v-avatar color="white"
                image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
            </template>
            <v-list-item-title>Daniela Rivera</v-list-item-title>
            <v-list-item-subtitle>Especialista en terapia cognitivo
              conductual</v-list-item-subtitle>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-container>
  </LayoutDefault>
</template>
<style>
#container {
  width: 100%;
}

.card-backgoundcustom {
  background-color: #4d575839 !important;
}
</style>
<script setup>
import LayoutDefault from "@/components/Layout/Layoutmain.vue";
</script>
