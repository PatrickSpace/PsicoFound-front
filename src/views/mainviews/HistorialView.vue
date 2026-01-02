<template>
    <LayoutDefault layout>
        <v-container>
            <h1 class="text-h4">Historial de terapias</h1>
            <v-divider class="my-5 mx-auto"></v-divider>

            <TerapiasDatatable />
           
        </v-container>
    </LayoutDefault>
</template>

<script setup>
import LayoutDefault from '@/components/Layout/Layoutmain.vue'
import TerapiasDatatable from '@/components/Terapias/TerapiasDatatable.vue'


</script>
