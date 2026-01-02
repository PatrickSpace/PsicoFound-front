<template>

    <v-row>
         <v-col cols="6">
            <v-btn to="/iniciarencuesta" size="x-large" prepend-icon="mdi-plus" variant="tonal">
                Iniciar una nueva terapia
            </v-btn>
        </v-col>
        <v-col cols="6">
            <v-text-field v-model="search" clearable prepend-inner-icon="mdi-magnify" label="Buscar terapias"
                class="w-100" />
        </v-col>
       
    </v-row>



    <v-data-table :headers="headers" :items="filteredItems" class="card-backgoundcustom " :items-per-page="10">
        <template #item.problemas="{ item }">
            {{ Array.isArray(item.problemas) ? item.problemas.join(', ') : item.problemas }}
        </template>

        <template v-slot:item.actions="{ item }">
            <div class="d-flex ga-2 ">
                <v-icon icon="mdi-list-box" @click="itemdetail(item.id)"></v-icon>
            </div>
        </template>
    </v-data-table>

</template>

<script setup>
import { ref, computed } from 'vue'

const terapias = [
    { id: 1, nombre: '1 Lucha contra la ansiedad', estado: 'Terapia activa', fechaInicio: '15/02/2024', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
    { id: 2, nombre: '2 Lucha contra la depresion', estado: 'Terapia activa', fechaInicio: '15/02/2024', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
    { id: 3, nombre: '3 Lucha contra la autismo', estado: 'Terapia activa', fechaInicio: '15/02/2025', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
    { id: 4, nombre: '4 Lucha contra la ansiedad', estado: 'Terapia activa', fechaInicio: '15/02/2024', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
    { id: 5, nombre: '5 Lucha contra la depresion', estado: 'Terapia activa', fechaInicio: '15/02/2024', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
    { id: 6, nombre: '6 Lucha contra la autismo', estado: 'Terapia activa', fechaInicio: '15/02/2025', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
    { id: 7, nombre: '7 Lucha contra la ansiedad', estado: 'Terapia activa', fechaInicio: '15/02/2024', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
    { id: 8, nombre: '8 Lucha contra la depresion', estado: 'Terapia activa', fechaInicio: '15/02/2024', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
    { id: 9, nombre: '9 Lucha contra la autismo', estado: 'Terapia activa', fechaInicio: '15/02/2025', problemas: ['Trauma', 'Procastinación'], enfoque: 'Humanista', sesionesTomadas: 4 },
]

const search = ref('')
const items = ref(terapias)

const headers = [
    { title: 'Nombre', value: 'nombre' },
    { title: 'Estado', value: 'estado' },
    { title: 'Fecha inicio', value: 'fechaInicio' },
    { title: 'Problemas', value: 'problemas' },
    { title: 'Enfoque', value: 'enfoque' },
    { title: 'Sesiones', value: 'sesionesTomadas' },
    { title: 'Ver detalle', key: 'actions', sortable: false },
]

const filteredItems = computed(() => {
    const q = search.value?.toString().trim().toLowerCase()
    if (!q) return items.value

    return items.value.filter((t) => {
        const combined = [
            t.nombre,
            t.fechaInicio,
            t.enfoque,
            Array.isArray(t.problemas) ? t.problemas.join(' ') : t.problemas,
        ].join(' ').toLowerCase()
        return combined.includes(q)
    })
})


async function itemdetail(id) {
    console.log("Item ID:", id);
}

</script>
