<script setup>
import { RouterLink, RouterView } from "vue-router";
import NavDrawer from "./components/Layout/NavDrawer.vue";
import NavBar from "./components/Layout/NavBar.vue";
</script>

<template>
  <!--
    <v-layout>
      <NavBar />
      <NavDrawer />
      <v-main>
        <RouterView />
      </v-main>
    </v-layout>
  -->
  <v-app full-height class="app">
    <RouterView />
  </v-app>
</template>

<style >
#app {
  padding: 0px;
}
</style>
