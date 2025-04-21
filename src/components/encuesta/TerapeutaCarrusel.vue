<template>
  <v-container class="carousel-container" max-width="1400" fluid>
    <div class="carousel">
      <div v-for="(therapist, index) in visibleTherapists" :key="therapist.id" class="carousel-card" :class="{
        center: index === 2,
        left1: index === 0,
        left2: index === 1,
        right1: index === 3,
        right2: index === 4,
      }" @click="handleCardClick(index)">
        <v-card :style="{ background: therapist.gradient }"
          class="pa-5 h-75 d-flex flex-column align-center justify-center">
          <v-avatar size="100" class="mb-4">
            <img :src="therapist.avatar" alt="avatar" />
          </v-avatar>
          <h5 class="text-h5 mt-5">{{ therapist.name }}</h5>
          <p class="text-center text-body-2 w-75">{{ therapist.description }}</p>
          <div class="mt-4 d-flex justify-space-between w-100">
            <span><strong>Ayuda en:</strong> {{ therapist.specialty }}</span>
            <span><strong>Enfoque:</strong> {{ therapist.approach }}</span>
          </div>
          <v-btn color="primary" class="mt-4" append-icon="mdi-arrow-right">
            Agendar cita
          </v-btn>
        </v-card>
      </div>
    </div>
  </v-container>
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
  },
  {
    id: 2,
    name: "Pedro",
    description: "Especialista en familia...",
    specialty: "Relaciones",
    approach: "Sistémico",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    gradient: "linear-gradient(to bottom right, #CE2121, #D7CF05)",
  },
  {
    id: 3,
    name: "Jhon Doe",
    description: "Me gustan los gatos y el ají de pollo.",
    specialty: "Traumas infantiles",
    approach: "Humanista",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    gradient: "linear-gradient(to bottom right, #2E36FF, #0BE6A4)",
  },
  {
    id: 4,
    name: "María",
    description: "Psicología Gestalt...",
    specialty: "Autoestima",
    approach: "Gestalt",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    gradient: "linear-gradient(to bottom right, #CE2121, #3F34C0)",
  },
  {
    id: 5,
    name: "Luis",
    description: "Psicoterapia dinámica...",
    specialty: "Depresión",
    approach: "Psicodinámico",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    gradient: "linear-gradient(to bottom right, #41E6C8, #134335)",
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
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  perspective: 1000px;
  height: 100vh;
}

.carousel-card {
  transform: scale(0.8);
  transition: all 0.5s ease;
  opacity: 0.5;
  cursor: pointer;
  height: 75vh;
}

.carousel-card.left1 {
  transform: translateX(150px) rotateY(15deg) scale(1.1);
  opacity: 1;
  z-index: -2;
}

.carousel-card.right1 {
  transform: translateX(-50px) rotateY(-15deg) scale(1.1);
  opacity: 1;
  z-index: -1;
}

.carousel-card.left2 {
  transform: translateX(50px) rotateY(15deg) scale(1.1);
  opacity: 1;
  z-index: -1;
}

.carousel-card.right2 {
  transform: translateX(-150px) rotateY(-15deg) scale(1.1);
  opacity: 1;
  z-index: -2;
}

.carousel-card.center {
  transform: scale(1.2);
  opacity: 1;
  cursor: default;
  z-index: 1;
  margin: -5%;
}
</style>