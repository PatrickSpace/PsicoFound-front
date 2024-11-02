<template>
  <LayoutDefault layout>
    <v-container>
      <h1>Psicologos</h1>
      <v-divider></v-divider>
      <DataTablePsicologos />
    </v-container>
  </LayoutDefault>
</template>
<script setup>
import DataTablePsicologos from "@/components/Psicologos/DataTablePsicologos.vue";
import LayoutDefault from "@/components/Layout/Layoutmain.vue";
</script>