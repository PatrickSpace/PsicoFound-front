<template>
  <v-app-bar app class="bg-transparent pl-10" flat>
    <v-app-bar-title class="text-h5">PsicoFound</v-app-bar-title>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-bell</v-icon>
    </v-btn>

    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-account</v-icon>
        </v-btn>
      </template>
      <v-list density="compact">
        <v-list-item link @click="logout()"> LogOut</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script setup>
import { auth } from "@/plugins/Firebase/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";
const router = useRouter();
async function logout() {
  try {
    await signOut(auth);
    console.log("logout");
  } catch (e) {
    console.error(e);
  } finally {
    router.push("/login");
  }
}
</script>
