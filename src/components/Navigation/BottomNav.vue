<template>
  <v-bottom-navigation class="bg-transparent d-lg-none" grow>
    <v-btn
      v-for="(item, i) in items"
      :key="i"
      :value="item.name"
      :to="item.link"
      class="p-5"
    >
      <v-icon>{{ item.icon }}</v-icon>
      <span>{{ item.name }}</span>
    </v-btn>
  </v-bottom-navigation>
</template>
    <script setup>
const items = [
  { name: "Home", icon: "mdi-home", link: "/dashboard" },
  { name: "Mis sesiones", icon: "mdi-calendar-month", link: "/" },
  { name: "Progreso", icon: "mdi-finance", link: "/" },
  {
    name: "Terapias",
    icon: "mdi-book-open-page-variant",
    link: "/",
  },
  { name: "Herramientas", icon: "mdi-tools", link: "/" },
];
</script>
<style>
</style>