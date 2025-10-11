<template>
  <!-- Carousel fuera del dialog -->
  <v-container class="carousel-container pa-0" max-width="1600" fluid>
    <div class="carousel pa-0">
      <div
        v-for="(therapist, index) in visibleTherapists"
        :key="therapist.id"
        class="carousel-card pa-0"
        :class="{
          left1: index === 0,
          left2: index === 1,
          center: index === 2,
          right1: index === 3,
          right2: index === 4,
        }"
        @click="handleCardClick(index)"
      >
        <v-card
          :style="{ background: therapist.gradient }"
          class="pa-5 h-75 d-flex flex-column align-center justify-center elevation-10"
          style="width: 100%"
        >
          <v-avatar
            size="xl"
            class="mb-4 border-white border-lg border-opacity-75"
          >
            <img :src="therapist.avatar" alt="avatar" />
          </v-avatar>
          <h5 class="text-h5 mt-5">{{ therapist.name }}</h5>
          <p class="text-center mb-5 text-body-2">
            {{ therapist.description }}
          </p>
          <v-row class="mt-5 w-100 text-center">
            <v-col class="h-auto">
              <strong>Ayuda en:</strong> <br />{{ therapist.specialty }}
            </v-col>
            <v-col>
              <strong>Enfoque:</strong> <br />
              {{ therapist.approach }}
            </v-col>
          </v-row>

          <!-- Mostrar botón solo en la tarjeta central -->
          <v-btn
            v-if="index === 2"
            variant="tonal"
            size="large"
            class="mb-10"
            append-icon="mdi-arrow-right"
            @click.stop="openDialog(index)"
          >
            Agendar cita
          </v-btn>
        </v-card>
      </div>
    </div>
  </v-container>

  <!-- Footer -->
  <p class="footerchoose position-fixed bottom-0 text-white">
    {{ therapists[currentIndex].mensaje }}
  </p>

  <!-- Dialog separado: sólo muestra el modal cuando dialog === true -->
  <v-dialog v-model="dialog" max-width="500">
    <v-card v-if="selectedTherapist" class="ma-4" append-icon="mdi-close">
      <v-row class="justify-center mb-4">
        <v-card-title>
          <v-btn variant="text" icon="mdi-chevron-left"></v-btn>
          {{ selectedTherapist.name }}
          <v-btn variant="text" icon="mdi-chevron-right"></v-btn>
        </v-card-title>
      </v-row>
      <v-row class="mx-10">
        <v-col>
          <v-sheet
            color="teal-darken-2"
            class="font-weight-bold text-center text-h5 px-5 py-5"
          >
            Lunes
          </v-sheet>
        </v-col>
      </v-row>
      <v-card-text>
        {{ selectedTherapist.mensaje }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">Cerrar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup>
import { ref, computed } from "vue";
const dialog = ref(false);
const therapists = ref([
  {
    id: 1,
    name: "Ana",
    description: "Terapia cognitiva...",
    specialty: "Ansiedad",
    approach: "Cognitivo",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
    gradient: "linear-gradient(to bottom right, red, blue)",
    mensaje:
      "El enfoque de Ana es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”",
  },
  {
    id: 2,
    name: "Pedro",
    description: "Especialista en familia...",
    specialty: "Relaciones",
    approach: "Sistémico",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
    gradient: "linear-gradient(to bottom right, #CE2121, #D7CF05)",
    mensaje:
      "El enfoque de Pedro es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”",
  },
  {
    id: 3,
    name: "Jhon Doe",
    description: "Me gustan los gatos y el ají de pollo.",
    specialty: "Traumas infantiles",
    approach: "Humanista",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    gradient: "linear-gradient(to bottom right, #2E36FF, #0BE6A4)",
    mensaje:
      "El enfoque de Jhon es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”",
  },
  {
    id: 4,
    name: "María",
    description: "Psicología Gestalt...",
    specialty: "Autoestima",
    approach: "Gestalt",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
    gradient: "linear-gradient(to bottom right, #CE2121, #3F34C0)",
    mensaje:
      "El enfoque de Jhon es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”",
  },
  {
    id: 5,
    name: "Luis",
    description: "Psicoterapia dinámica...",
    specialty: "Depresión",
    approach: "Psicodinámico",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
    gradient: "linear-gradient(to bottom right, #41E6C8, #134335)",
    mensaje:
      "El enfoque de Jhon es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”",
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

// Nuevo: estado y función para abrir el dialog con el terapeuta seleccionado
const selectedTherapist = ref(null);

function openDialog(index) {
  selectedTherapist.value = visibleTherapists.value[index];
  dialog.value = true;
}
</script>
<style scoped>
.footerchoose {
  position: fixed;
  bottom: 5vh;
  left: 0;
  right: 0;
  text-align: center;
  /* tamaño de texto responsive para el footer */
  font-size: clamp(0.9rem, 1.8vw, 1.1rem);
}

/* Tipografía responsive dentro de las cards (no tocar anchos ya definidos) */
.carousel-card h5 {
  margin: 0.6rem 0 0.4rem;
  font-weight: 600;
  line-height: 1.1;
  font-size: clamp(1.1rem, 1.6vw + 0.4rem, 1.6rem);
}

.carousel-card p.text-body-2 {
  margin: 0.4rem 1rem 0.8rem;
  line-height: 1.35;
  font-size: clamp(0.9rem, 1.1vw + 0.2rem, 1.05rem);
}

/* Etiquetas dentro de las columnas (Ayuda en / Enfoque) */
.carousel-card strong {
  display: inline-block;
  font-size: clamp(0.85rem, 1vw + 0.1rem, 0.98rem);
}

/* Botón responsive sin alterar el tamaño del card */
.carousel-card .v-btn {
  font-size: clamp(0.95rem, 1.1vw + 0.1rem, 1.05rem);
  padding: 0.6rem 1rem;
}

/* Mantener alturas y anchos ya definidos: */
.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  perspective: 1000px;
  height: 100vh;
}

/* Base: tarjetas laterales más estrechas, central más ancha */
.carousel-card {
  width: 16%;
  transition: all 0.5s ease;
  opacity: 0.5;
  cursor: pointer;
  height: 75vh;
  box-sizing: border-box;
}

/* Ajustes para posiciones (mantener transformaciones) */
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

/* Tarjeta central: más ancha y un poco escalada */
.carousel-card.center {
  width: 24%;
  transform: scale(1.08) rotateY(0deg);
  opacity: 1;
  cursor: default;
  z-index: 1;
}

/* Responsive: pantallas medianas */
@media (max-width: 1200px) {
  .carousel-card {
    width: 18%;
    height: 68vh;
  }
  .carousel-card.center {
    width: 28%;
  }
  .carousel-card.left1 {
    transform: translateX(140px) rotateY(20deg);
  }
  .carousel-card.right2 {
    transform: translateX(-140px) rotateY(-20deg);
  }
}

/* Responsive: pantallas pequeñas (tablets / móviles grandes) */
@media (max-width: 900px) {
  .carousel {
    gap: 12px;
    height: auto;
    padding: 4vh 0;
  }
  .carousel-card {
    width: 30%;
    height: 60vh;
  }
  .carousel-card.center {
    width: 46%;
    transform: scale(1.04);
  }
  .carousel-card.left1,
  .carousel-card.left2,
  .carousel-card.right1,
  .carousel-card.right2 {
    transform: translateX(0) rotateY(0deg);
    opacity: 0.6;
  }
}

/* Responsive: móviles pequeños (mostrar sólo la central claramente) */
@media (max-width: 480px) {
  .carousel {
    flex-wrap: nowrap;
    gap: 8px;
  }
  .carousel-card {
    width: 80%;
    height: auto;
    opacity: 0.6;
  }
  .carousel-card.center {
    width: 92%;
    opacity: 1;
    transform: scale(1) rotateY(0deg);
  }
}
</style>