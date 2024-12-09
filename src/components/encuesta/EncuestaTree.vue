<template>
  <div>
    <v-stepper v-model="e1" class="bg-transparent elevation-0">
      <template v-slot:default="{ prev, next }">

        <v-stepper-header class="elevation-0" color="white">
          <template v-for="paso in pasos" :key="paso.key">
            <v-stepper-item :title="paso.value" :complete="e1 > paso.n" :step="`Step {{ paso.n }}`" :value="paso.n"
              color="white"></v-stepper-item>
            <v-divider v-if="paso.n !== steps" :key="paso.n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-window>
          <v-stepper-window-item :value="1">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">¿Que probema deseas resolver?</h1>
              <v-container class="mx-auto w-50 mt-5 text-center">
                <v-combobox v-model="especialidad" chips multiple
                  :items="['Abuso de sustancias', 'Ansiedad', 'Depresión', 'Trauma infatil', 'Ansiedad social']"></v-combobox>
                <v-btn variant="text">Solo quiero conversar con alguien</v-btn>
              </v-container>
            </v-card>
          </v-stepper-window-item>

          <v-stepper-window-item :value="2">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">¿Como te gustaria llevar tu terapia?</h1>
              <v-container class="mx-auto w-50 mt-5">
                <v-combobox v-model="enfoque"
                  :items="['Humanista', 'Cognitivo-Conductual', 'Psicoanalisis']"></v-combobox>
              </v-container>
            </v-card>
          </v-stepper-window-item>

          <v-stepper-window-item :value="3">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">¿Con que genero de terapeuta te sientes más comodo?</h1>
              <v-container class="mx-auto w-50 mt-5">
                <v-combobox v-model="genero" :items="['Hombre', 'Mujer', 'Me es indiferente']"></v-combobox>
              </v-container>
            </v-card>
          </v-stepper-window-item>

          <v-stepper-window-item :value="4">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">¿Que modalidad te gustaria seguir?</h1>
              <v-container class="mx-auto w-50 mt-5">
                <v-combobox v-model="modalidad" :items="['Online', 'Presencial', 'Hiibrido']"></v-combobox>
              </v-container>
            </v-card>
          </v-stepper-window-item>

          <v-stepper-window-item :value="5">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">¿Que edad te gustaria que tenga tu terapeuta</h1>
              <v-container class="mx-auto w-50 mt-5 text-center">
                <v-combobox v-model="edad" :items="['18-25', '25-35', '35-45', '+ 45']"></v-combobox>
                <v-btn class="mx-auto text-center" variant="tonal" size="large"> Buscar terapeuta</v-btn>
              </v-container>
            </v-card>
          </v-stepper-window-item>

        </v-stepper-window>

        <v-stepper-actions :disabled="disabled" @click:next="next" @click:prev="prev"></v-stepper-actions>
      </template>
    </v-stepper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
      steps: 5,
      especialidad: null,
      enfoque: "",
      genero: "",
      modalidad: "",
      edad: "",
      pasos: [
        { n: 1, key: 1, value: "Especialidad", },
        { n: 2, key: 2, value: "Enfoque terapeutico", },
        { n: 3, key: 3, value: "Genero del terapeuta", },
        { n: 4, key: 4, value: "Modalidad", },
        { n: 5, key: 5, value: "Edad", }
      ],
    };
  },

  computed: {
    disabled() {
      return this.e1 === 1
        ? "prev"
        : this.e1 === this.steps
          ? "next"
          : undefined;
    },
  },
};
</script>