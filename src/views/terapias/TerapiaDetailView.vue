<template>
    <LayoutDefault layout>
        <v-container>
            <h1 class="text-h4">Nueva Terapia</h1>
            <v-divider class="my-5 mx-auto"></v-divider>

            <TerapiaForm />
           
        </v-container>
    </LayoutDefault>
</template>

<script setup>
import LayoutDefault from "@/components/Layout/Layoutmain.vue";
import TerapiaForm from "@/components/Terapias/TerapiaForm.vue";

</script>