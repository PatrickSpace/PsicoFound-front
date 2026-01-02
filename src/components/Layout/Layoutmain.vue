<template>
  <v-app class="screen" full-height>
    <NavBar />
    <NavDrawer />
    <v-main class="">
      <v-container class="">
        <slot name="default"></slot>
      </v-container>
    </v-main>
    <BottomNav />
  </v-app>
</template>

<script setup>
import NavDrawer from "@/components/Navigation/NavDrawer.vue";
import NavBar from "@/components/Navigation/NavBar.vue";
import BottomNav from "@/components/Navigation/BottomNav.vue";
</script>
<style>
.screen {
  background: linear-gradient(
    225deg,
    #1f4146 0%,
    rgb(18, 44, 47) 28%,
    rgba(3, 7, 7, 1) 75%
  ) !important;
}
</style>