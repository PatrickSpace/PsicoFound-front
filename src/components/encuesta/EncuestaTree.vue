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
                <v-combobox v-model="especialidad" chips multiple :items="especialidades"></v-combobox>
                <v-btn to="/elegirterapeuta" variant="text">Solo quiero conversar con alguien</v-btn>
              </v-container>
            </v-card>
          </v-stepper-window-item>

          <v-stepper-window-item :value="2">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">
                ¿Como te gustaria llevar tu terapia?
              </h1>
              <v-container class="mx-auto w-50 mt-5">
                <v-combobox v-model="enfoque" :items="[
                  'Humanista',
                  'Cognitivo-Conductual',
                  'Psicoanalisis',
                ]"></v-combobox>
              </v-container>
            </v-card>
          </v-stepper-window-item>

          <v-stepper-window-item :value="3">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">
                ¿Con que genero de terapeuta te sientes más comodo?
              </h1>
              <v-container class="mx-auto w-50 mt-5">
                <v-combobox v-model="genero" :items="['Hombre', 'Mujer', 'Me es indiferente']"></v-combobox>
              </v-container>
            </v-card>
          </v-stepper-window-item>

          <v-stepper-window-item :value="4">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">
                ¿Que modalidad te gustaria seguir?
              </h1>
              <v-container class="mx-auto w-50 mt-5">
                <v-combobox v-model="modalidad" :items="['Online', 'Presencial', 'Hiibrido']"></v-combobox>
              </v-container>
            </v-card>
          </v-stepper-window-item>

          <v-stepper-window-item :value="5">
            <v-card class="bg-transparent w-100">
              <h1 class="text-h5 text-center">
                ¿Que edad te gustaria que tenga tu terapeuta
              </h1>
              <v-container class="mx-auto w-50 mt-5 text-center">
                <v-combobox v-model="edad" :items="['18-25', '25-35', '35-45', '+ 45']"></v-combobox>
                <v-btn class="mx-auto text-center" variant="tonal" size="large" to="/elegirterapeuta">
                  Buscar terapeuta</v-btn>
              </v-container>
            </v-card>
          </v-stepper-window-item>
        </v-stepper-window>
        <v-stepper-actions :disabled="disabled" @click:next="() => $refs.stepperNext?.()" @click:prev="() => $refs.stepperPrev?.()"></v-stepper-actions>
      </template>
    </v-stepper>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useTerapiaStore} from '@/store/terapiaStore'
const e1 = ref(1)
const steps = ref(5)
const terapiaStore = useTerapiaStore()


const pasos = ref([
  { n: 1, key: 1, value: 'Especialidad' },
  { n: 2, key: 2, value: 'Enfoque terapeutico' },
  { n: 3, key: 3, value: 'Genero del terapeuta' },
  { n: 4, key: 4, value: 'Modalidad' },
  { n: 5, key: 5, value: 'Edad' },
])

const especialidades = ref([
  { title: 'Abuso de sustancias', value: '1' },
  { title: 'Ansiedad', value: '2' },
  { title: 'Depresión', value: '3' },
  { title: 'Trauma infatil', value: '4' },
  { title: 'Ansiedad social', value: '5' },
  { title: 'Problemas de pareja', value: '6' },
  { title: 'Problemas familiares', value: '7' },
  { title: 'Problemas laborales', value: '8' },
  { title: 'Problemas de autoestima', value: '9' },
  { title: 'Problemas de identidad', value: '10' },
  { title: 'Otros', value: '11' },
])

const especialidad = ref('')
const enfoque = ref('')
const genero = ref('')
const modalidad = ref('')
const edad = ref('')

function buscarterapeutaejemplo() {
  terapiaStore.buscarterapeutaejemplo(
    especialidad.value,
    enfoque.value,
    genero.value,
    modalidad.value,
    edad.value
  )
}



const disabled = computed(() => {
  if (e1.value === 1) return 'prev'
  if (e1.value === steps.value) return 'next'
  return undefined
})
</script>