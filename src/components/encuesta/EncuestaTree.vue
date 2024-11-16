<template>
  <div>
    <v-stepper v-model="e1" class="bg-transparent elevation-0">
      <template v-slot:default="{ prev, next }">
        <v-stepper-header class="elevation-0" color="white">
          <template v-for="paso in pasos" :key="paso.key">
            <v-stepper-item
              :title="paso.value"
              :complete="e1 > paso.n"
              :step="`Step {{ paso.n }}`"
              :value="paso.n"
              color="white"
            ></v-stepper-item>

            <v-divider v-if="paso.n !== steps" :key="paso.n"></v-divider>
          </template>
        </v-stepper-header>

        <v-stepper-window>
          <v-stepper-window-item
            v-for="paso in pasos"
            :key="paso.key"
            :value="paso.n"
          >
            <v-card color="grey-lighten-1" height="200"></v-card>
          </v-stepper-window-item>
        </v-stepper-window>

        <v-stepper-actions
          :disabled="disabled"
          @click:next="next"
          @click:prev="prev"
        ></v-stepper-actions>
      </template>
    </v-stepper>
  </div>
</template>
<script>
export default {
  data() {
    return {
      e1: 1,
      steps: 2,
      pasos: [
        { n: 1, key: 1, value: "Paso 1" },
        { n: 2, key: 2, value: "Paso 2" },
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