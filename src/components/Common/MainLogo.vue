<template>
  <v-btn
    variant="plain"
    size="x-large"
    color="white"
    class="my-5 font-weight-black text-h5 mx-0 px-0"
    :ripple="false"
    to="/"
  >
    <template v-slot:prepend>
      <v-icon size="x-large" color="white">mdi-home</v-icon>
    </template>

    PsicoFound
  </v-btn>
</template>
<script setup></script>