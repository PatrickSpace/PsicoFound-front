<template>

    <LayoutDefault layout>

        <v-container>
            <h1 class="text-h4">Mis sesiones</h1>
            <v-divider class="my-5 mx-auto"></v-divider>


            <v-card class="pa-2 my-5 card-backgoundcustom" elevation="2" variant="text"
                href="https://github.com/vuetifyjs/vuetify/">
                <v-card-title class="text-h5"> Agenda una sesión <v-icon size="small">mdi-open-in-new</v-icon>
                </v-card-title>
                <v-card-text>
                    <v-divider></v-divider>
                    <v-list-item class="pt-5 px-0">

                        <v-list-item-title class="">No tienes una sesión agendada</v-list-item-title>
                        <v-list-item-subtitle class="">Haz click aquí para revisar la agenda de tu terapeuta y agendar
                            una sesión</v-list-item-subtitle>
                    </v-list-item>
                </v-card-text>
            </v-card>
            <v-row align="stretch">
                <v-col cols="12" sm="12" md="6" class="d-flex">
                    <v-card class="pa-2 card-backgoundcustom flex-grow-1 d-flex flex-column" elevation="2"
                        variant="text">
                        <v-card-title class="text-h5"> <v-icon size="small">mdi-calendar-clock</v-icon> Proxima sesión
                        </v-card-title>
                        <v-card-text>
                            <v-divider></v-divider>
                            <v-list-item class="w-150 mx-auto pt-5">
                                <template v-slot:prepend>
                                    <h4 class="text-h3">23</h4>
                                </template>
                                <v-list-item-title class="pl-5">Febrero</v-list-item-title>
                                <v-list-item-subtitle class="pl-5">2025</v-list-item-subtitle>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="d-flex">
                    <v-card class="pa-2 card-backgoundcustom flex-grow-1 d-flex flex-column" elevation="2"
                        variant="text">
                        <v-card-title class="text-h5"> <v-icon size="small">mdi-map-marker-radius</v-icon> Ubicación de
                            la sesión
                        </v-card-title>
                        <v-card-text>
                            <v-divider></v-divider>
                            <v-list-item class="pt-5 px-0">

                                <v-list-item-title class="" v-if="!online">{{ direccion }} </v-list-item-title>
                                <v-list-item-subtitle class="" v-if="!online"> Modalidad
                                    precencial</v-list-item-subtitle>

                                <v-list-item-title class="" v-if="online">{{ appcall }} </v-list-item-title>
                                <v-list-item-subtitle class="" v-if="online"> Modalidad remoto</v-list-item-subtitle>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>

            <v-card class="pa-2 my-5 card-backgoundcustom" elevation="2" variant="text"
                href="https://github.com/vuetifyjs/vuetify/">
                <v-card-title class="text-h5"> ¿Cambio de planes? <v-icon size="small">mdi-book-edit</v-icon>
                </v-card-title>
                <v-card-text>
                    <v-divider></v-divider>
                    <v-list-item class="pt-5 px-0">

                        <v-list-item-title class="">Reprograma tu sesión</v-list-item-title>
                        <v-list-item-subtitle class=""> Puedes cambiar el horario de una sesión programada </v-list-item-subtitle>
                    </v-list-item>
                </v-card-text>
            </v-card>

            <v-row align="stretch">
                <v-col cols="12" sm="12" md="6" class="d-flex">
                    <v-card class="pa-2 card-backgoundcustom flex-grow-1 d-flex flex-column" elevation="2"
                        variant="text">
                        <v-card-title class="text-h5"> <v-icon size="small">mdi-file-document-multiple</v-icon>
                            Historial de
                            sesiones
                        </v-card-title>
                        <v-card-text>
                            <v-divider></v-divider>
                            <v-list-item class="px-0 pt-5">

                                <v-list-item-title class="">Revisa tu historial de terapias</v-list-item-title>
                                <v-list-item-subtitle class="">Podras encontrar las notas de las sesiones y herramientas
                                    aprendidas</v-list-item-subtitle>
                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="12" md="6" class="d-flex">
                    <v-card class="pa-2 card-backgoundcustom flex-grow-1 d-flex flex-column" elevation="2"
                        variant="text">
                        <v-card-title class="text-h5"> <v-icon size="small">mdi-archive-edit</v-icon> Administra tu
                            terapia
                        </v-card-title>
                        <v-card-text>
                            <v-divider></v-divider>
                            <v-list-item class="pt-5 px-0">

                                <v-list-item-title class="">Podras cambiar los parametros de tu terapia </v-list-item-title>
                                <v-list-item-subtitle class=""> Modifica objetivos, cambia de terapeuta, pausa tu terapia</v-list-item-subtitle>


                            </v-list-item>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>


        </v-container>
    </LayoutDefault>
</template>
<script setup>
import LayoutDefault from "@/components/Layout/Layoutmain.vue";

let online = false;
const direccion = "Calle Falsa 123, Ciudad, País";
let appcall = "Teams"

</script>