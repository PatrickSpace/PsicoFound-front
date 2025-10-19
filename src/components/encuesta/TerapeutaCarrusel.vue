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
  <v-dialog
    v-model="dialog"
    max-width="1100"
    persistent
    scrim="rgba(0,0,0,0.85)"
  >
    <v-card class="dialog-root pa-0" v-if="selectedTherapist">
      <!-- Header: month + navigation + close -->
      <v-sheet
        class="dialog-header d-flex align-center justify-center pa-4"
        elevation="0"
      >
        <div class="text-center d-flex align-center position-absolute">
          <v-btn icon variant="text" @click="prevMonth"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          >
          <div class="dialog-month mx-6 text-h6">{{ monthLabel }}</div>
          <v-btn icon variant="text" @click="nextMonth"
            ><v-icon>mdi-chevron-right</v-icon></v-btn
          >
        </div>

        <v-btn icon variant="text" class="ml-auto" @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-sheet>

      <!-- FIX: Abrir <v-card-text> que faltaba -->
      <v-card-text class="pa-0">
        <!-- Grid de días + horarios (foreground) -->
        <div class="schedule-foreground pa-6">
          <!-- Días (header) -->
          <v-row class="mb-4" dense>
            <v-col
              v-for="(day, i) in weekdays"
              :key="day"
              class="d-flex justify-center"
            >
              <v-btn size="x-large" color="teal darken-2" class="day-pill">
                {{ day }}
              </v-btn>
            </v-col>
          </v-row>

          <!-- Horarios: filas por hora, columnas por día -->
          <div class="times-grid">
            <div class="times-row" v-for="time in times" :key="time">
              <div
                class="time-cell"
                v-for="(day, dayIndex) in weekdays"
                :key="dayIndex"
              >
                <v-btn
                  class="time-btn"
                  :variant="isSelectedSlot(dayIndex, time)"
                  :color="slotColor(dayIndex, time) || 'teal darken-2'"
                  size="large"
                  @click="selectSlot(dayIndex, time)"
                >
                  {{ time }}
                </v-btn>
              </div>
            </div>
          </div>

          <!-- Acción final -->
          <div class="d-flex justify-end mt-6">
            <v-btn
              variant="tonal"
              color="white"
              :disabled="!selectedSlot"
              @click="confirmAppointment"
              to="/dashboard"
            >
              Agendar cita
              <v-icon right>mdi-arrow-right</v-icon>
            </v-btn>
          </div>
        </div>
      </v-card-text>
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
      "El enfoque de Maria es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”",
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
      "El enfoque de Luis es indagar en recuerdos para poder superarlos “Uno debe mirar atras para seguir adelante”",
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

// agregar estado y funciones para el calendario dentro del mismo <script setup>
const now = new Date();
const currentMonth = ref(new Date(now.getFullYear(), now.getMonth(), 1));

const weekdays = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
// horarios ejemplo (puedes cambiar/traer dinámicamente)
const times = ref(["08:00", "09:00", "10:00", "15:00"]);

// slot seleccionado: { dayIndex, time } o null
const selectedSlot = ref(null);

// etiqueta del mes (Abril 2025)
const monthLabel = computed(() =>
  new Intl.DateTimeFormat("es-ES", { month: "long", year: "numeric" }).format(
    currentMonth.value
  )
);

function prevMonth() {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() - 1,
    1
  );
}
function nextMonth() {
  currentMonth.value = new Date(
    currentMonth.value.getFullYear(),
    currentMonth.value.getMonth() + 1,
    1
  );
}

function selectSlot(dayIndex, time) {
  // alternar selección
  if (
    selectedSlot.value &&
    selectedSlot.value.dayIndex === dayIndex &&
    selectedSlot.value.time === time
  ) {
    selectedSlot.value = null;
  } else {
    selectedSlot.value = { dayIndex, time };
  }
}

function isSelectedSlot(dayIndex, time) {
  var selected =
    selectedSlot.value &&
    selectedSlot.value.dayIndex === dayIndex &&
    selectedSlot.value.time === time;

  return selected ? "flat" : "outlined";
}

// Añadir esta función para evitar el ternario en el template
function slotColor(dayIndex, time) {
  return isSelectedSlot(dayIndex, time) ? "teal" : "primary";
}

function confirmAppointment() {
  if (!selectedSlot.value || !selectedTherapist.value) return;
  console.log(
    "Agendando con:",
    selectedTherapist.value.name,
    selectedSlot.value
  );
  dialog.value = false;
  selectedSlot.value = null;
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

/* estilo del diálogo: fondo con tarjeta del terapeuta detrás y grid por encima */
.dialog-root {
  background: transparent;
  box-shadow: none;
  max-height: 85vh;
}

/* header transparente centrado */
.dialog-header {
  background: rgba(0, 0, 0, 0.75);
  color: white;
  position: relative;
}

/* fondo: tarjeta terapeuta grande y centrada, baja opacidad */
.dialog-bg-card {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* no interfiere con selección */
  opacity: 0.12;
}
.bg-therapist {
  width: 60%;
  min-width: 420px;
  border-radius: 12px;
  color: white;
}

/* foreground: grid de selección */
.schedule-foreground {
  position: relative;
  z-index: 2;
  background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.45));
  
  border-bottom: 8px;
  backdrop-filter: blur(6px);
}

/* días header pills */
.day-pill {
  justify-content: center;
  color: white;
}

/* grid de tiempos: columnas implícitas según 6 días */
.times-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 12px;
}

/* cada fila contiene 6 celdas (una por día) */
.times-row {
  display: contents; /* permite que cada time-cell ocupe la columna correspondiente */
}

/* celdas y botones */
.time-cell {
  display: flex;
  justify-content: center;
  padding: 6px 4px;
}
.time-btn {
  width: 100%;
  min-width: 90px;
  max-width: 140px;
  border-radius: 8px;
}

/* responsive: menos columnas en móvil */
@media (max-width: 900px) {
  .times-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .day-pill {
    min-width: 90px;
    font-size: 0.9rem;
  }
  .bg-therapist {
    width: 80%;
    min-width: 300px;
  }
}
@media (max-width: 480px) {
  .times-grid {
    grid-template-columns: repeat(1, 1fr);
  }
  .time-btn {
    min-width: unset;
  }
}
</style>