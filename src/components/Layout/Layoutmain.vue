<template>
  <v-app>
    <NavDrawer />
    <v-main class="pt-10 bg-white">
      <v-container>
        <slot name="default"></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavDrawer from "@/components/Navigation/NavDrawer.vue";
var color = "bg-blue-grey-lighten-5"
</script>