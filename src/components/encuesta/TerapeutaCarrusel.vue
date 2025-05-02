<template>
  <v-container class="carousel-container pa-0" max-width="1600" fluid>
    <div class="carousel pa-0">
      <div v-for="(therapist, index) in visibleTherapists" :key="therapist.id" class="carousel-card pa-0" :class="{
        center: index === 2,
        left1: index === 0,
        left2: index === 1,
        right1: index === 3,
        right2: index === 4,
      }" @click="handleCardClick(index)">
        <v-card :style="{ background: therapist.gradient }"
          class="pa-5 h-75 d-flex flex-column align-center justify-center elevation-10" style="width: 100%;">
          <v-avatar size="xl" class="mb-4 border-white border-lg border-opacity-75">
            <img :src="therapist.avatar" alt="avatar" />
          </v-avatar>
          <h5 class="text-h5 mt-5">{{ therapist.name }}</h5>
          <p class="text-center mb-5 text-body-2">{{ therapist.description }}</p>
          <v-row class="mt-5 w-100 text-center">
            <v-col class="h-auto">
              <strong>Ayuda en:</strong> <br>{{ therapist.specialty }}
            </v-col>
            <v-col>
              <strong>Enfoque:</strong> <br> {{ therapist.approach }}
            </v-col>
          </v-row>
          <v-btn variant="tonal" size="large" class="mb-10" append-icon="mdi-arrow-right">
            Agendar cita
          </v-btn>
        </v-card>
      </div>
    </div>
  </v-container>
  <p class=" footerchoose position-fixed bottom-0 text-white">
    {{ therapists[currentIndex].mensaje }}
  </p>
</template>
<script setup>
import { ref, computed } from "vue";

const therapists = ref([
  {
    id: 1,
    name: "Ana",
    description: "Terapia cognitiva...",
    specialty: "Ansiedad",
    approach: "Cognitivo",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    gradient: "linear-gradient(to bottom right, red, blue)",
    mensaje: 'El enfoque de Ana es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”'
  },
  {
    id: 2,
    name: "Pedro",
    description: "Especialista en familia...",
    specialty: "Relaciones",
    approach: "Sistémico",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    gradient: "linear-gradient(to bottom right, #CE2121, #D7CF05)",
    mensaje: 'El enfoque de Pedro es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”'

  },
  {
    id: 3,
    name: "Jhon Doe",
    description: "Me gustan los gatos y el ají de pollo.",
    specialty: "Traumas infantiles",
    approach: "Humanista",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    gradient: "linear-gradient(to bottom right, #2E36FF, #0BE6A4)",
    mensaje: 'El enfoque de Jhon es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”'

  },
  {
    id: 4,
    name: "María",
    description: "Psicología Gestalt...",
    specialty: "Autoestima",
    approach: "Gestalt",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    gradient: "linear-gradient(to bottom right, #CE2121, #3F34C0)",
    mensaje: 'El enfoque de Jhon es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”'

  },
  {
    id: 5,
    name: "Luis",
    description: "Psicoterapia dinámica...",
    specialty: "Depresión",
    approach: "Psicodinámico",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    gradient: "linear-gradient(to bottom right, #41E6C8, #134335)",
    mensaje: 'El enfoque de Jhon es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”'

  },
]);

const currentIndex = ref(2); // empieza con el del medio

const visibleTherapists = computed(() => {
  const total = therapists.value.length;
  const order = [-2, -1, 0, 1, 2].map(
    (offset) => (currentIndex.value + offset + total) % total
  );
  return order.map((i) => therapists.value[i]);
});

function handleCardClick(index) {
  if (index === 2) return;
  const offset = index - 2;
  currentIndex.value =
    (currentIndex.value + offset + therapists.value.length) %
    therapists.value.length;
}
</script>
<style scoped>
.footerchoose {
  position: fixed;
  bottom: 5vh;
  left: 0;
  right: 0;
  text-align: center;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  perspective: 1000px;
  height: 100vh;

}

.carousel-card {
  width: 18%;
  transition: all 0.5s ease;
  opacity: 0.5;
  cursor: pointer;
  height: 75vh;
}

.carousel-card.left1 {
  transform: translateX(180px) rotateY(25deg);
  opacity: 1;
  z-index: -2;
}

.carousel-card.right1 {
  transform: translateX(-80px) rotateY(-25deg);
  opacity: 1;
  z-index: -1;
}

.carousel-card.left2 {
  transform: translateX(80px) rotateY(25deg);
  opacity: 1;
  z-index: -1;
}

.carousel-card.right2 {
  transform: translateX(-180px) rotateY(-25deg);
  opacity: 1;
  z-index: -2;
}

.carousel-card.center {
  transform: scale(1.1) rotateY(0deg);
  opacity: 1;
  cursor: default;
  z-index: 1;
}
</style>