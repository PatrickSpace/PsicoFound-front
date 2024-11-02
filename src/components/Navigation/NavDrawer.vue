<script setup>
</script>
<template>
  <v-navigation-drawer id="navd" theme="dark">
    <v-list>
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        subtitle="sandra_a88@gmailcom"
        title="Sandra Adams"
      ></v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-folder" title="Buscar Psicologo" to="/">
      </v-list-item>

      <v-list-item
        prepend-icon="mdi-home"
        title="Home"
        to="/dashboard"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-multiple"
        title="Psicologos"
        to="/psicologos"
      >
      </v-list-item>
      <v-list-item
        prepend-icon="mdi-star"
        title="Pacientes"
        to="/pacientes"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<style>
#navd {
  background: linear-gradient(to left bottom, #4a9ba7, #0d1c1e);
}
</style>