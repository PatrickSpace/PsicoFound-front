<template>
  <v-app>
    <NavDrawer />
    <v-main
      class="pt-10 bg-blue-grey-lighten-5"
      style="background-color: #e0f2f1"
    >
      <v-container>
        <slot name="default"></slot>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import NavDrawer from "@/components/Navigation/NavDrawer.vue";
</script>