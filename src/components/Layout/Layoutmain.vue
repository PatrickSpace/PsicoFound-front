<template>
  <v-app class="screen" full-height>
    <v-app-bar app class="bg-transparent" flat>
      <v-app-bar-title class="pl-10 text-h5">PsicoFound</v-app-bar-title>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
    <NavDrawer />
    <v-main class="">
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
<style>
.screen {
  background: linear-gradient(225deg, rgb(31, 65, 70) 0%, rgb(18, 44, 47) 28%, rgba(3, 7, 7, 1) 75%) !important;

}
</style>