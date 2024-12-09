<template>
  <LayoutDefault layout>
    <v-theme-provider theme="light">

      <v-container>
        <h1>Psicologos</h1>
        <v-divider></v-divider>
        <v-form v-model="valid" class="my-5">
          <v-row>
            <v-col>
              <v-select label="Select" variant="outlined" color="cyan-darken-3"
                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-select>
            </v-col>
          </v-row>
        </v-form>
        <DataTablePsicologos />
      </v-container>
    </v-theme-provider>
  </LayoutDefault>
</template>
<script setup>
const valid = false
import DataTablePsicologos from "@/components/Psicologos/DataTablePsicologos.vue";
import LayoutDefault from "@/components/Layout/Layoutmain.vue";
</script>