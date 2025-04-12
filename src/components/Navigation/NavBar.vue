<script setup></script>
<template>
  <v-app-bar app class="bg-transparent pl-10" flat>
    <v-app-bar-nav-icon class="d-lg-none d-xl-none" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title class=" text-h5">PsicoFound</v-app-bar-title>
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
</template>
