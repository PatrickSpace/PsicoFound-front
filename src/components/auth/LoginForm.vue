<script setup>
const valid = false;
let firstname = "";
</script>
<template>
  <v-form theme="dark" v-model="valid">
    <v-container>
      <v-text-field
        v-model="firstname"
        :counter="10"
        label="First name"
        required
        theme="dark"
        variant="outlined"
      ></v-text-field>
    </v-container>
  </v-form>
</template>