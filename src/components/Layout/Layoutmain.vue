<template>
  <v-app>
    <NavDrawer />
    <v-main class="pt-10">
      <slot name="default"></slot>
    </v-main>
  </v-app>
</template>

<script setup>
import NavDrawer from "@/components/Layout/NavDrawer.vue";
</script>