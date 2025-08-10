<template>
  <v-theme-provider theme="dark">
    <v-form v-model="valid" class="text-white" @submit.prevent="onSubmit">
      <v-container class="px-0">
        <v-text-field
          v-model="form.email"
          label="Usuario"
          placeholder="tu@email.com"
          type="email"
          :rules="[r.required, r.email]"
          required
          clearable
        />
        <v-text-field
          v-model="form.password"
          label="Contraseña"
          type="password"
          :rules="[r.required, r.min8]"
          required
          clearable
        />
        <v-btn
          block
          class="my-5 bg-transparent"
          elevation="4"
          variant="tonal"
          size="large"
          type="submit"
          :disabled="!valid || loading"
          :loading="loading"
        >
          Iniciar Sesión
          <template #append>
            <v-icon>mdi-arrow-right</v-icon>
          </template>
        </v-btn>
      </v-container>
    </v-form>
    <v-divider color="white"></v-divider>
    <v-btn
      id="google"
      block
      class="my-5 text-white bg-google text-left"
      elevation="4"
      variant="tonal"
      size="large"
    >
      Iniciar sesión con Google
      <template #prepend>
        <v-icon>mdi-google</v-icon>
      </template>
    </v-btn>
    <v-btn
      id="facebook"
      block
      class="my-5 text-white bg-facebook"
      elevation="4"
      variant="tonal"
      size="large"
    >
      Iniciar sesión con Facebook
      <template #prepend>
        <v-icon>mdi-facebook</v-icon>
      </template>
    </v-btn>
    <v-btn
      id="apple"
      block
      class="my-5 text-white"
      variant="tonal"
      size="large"
      elevation="4"
    >
      Iniciar sesión con Apple
      <template #prepend>
        <v-icon>mdi-apple</v-icon>
      </template>
    </v-btn>
  </v-theme-provider>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth";

const route = useRoute();
const auth = useAuthStore();

const form = reactive({ email: "", password: "" });
const valid = ref(false);
const loading = ref(false);

const r = {
  required: (v) => !!v || "Requerido",
  email: (v) => /.+@.+\..+/.test(v) || "Email inválido",
  min8: (v) => v?.length >= 8 || "Mínimo 8 caracteres",
};

async function onSubmit() {
  if (!valid.value || loading.value) return;
  loading.value = true;
  try {
    await auth.login({ email: form.email, password: form.password });
    const next = route.query.next || "/encuesta";
    window.location.href = Array.isArray(next) ? next[0] : next;
  } catch (e) {
    console.warn("Login error:", e);
  } finally {
    loading.value = false;
  }
}
</script>

<style>
#google {
  background: rgb(137, 0, 11);
  background: linear-gradient(
    90deg,
    rgba(168, 0, 14, 1) 0%,
    rgba(255, 255, 255, 0) 65%
  );
}

#facebook {
  background: rgb(0, 76, 168);
  background: linear-gradient(
    90deg,
    rgb(0, 50, 199) 0%,
    rgba(255, 255, 255, 0) 65%
  );
}

#apple {
  background: rgb(7, 0, 1);
  background: linear-gradient(
    90deg,
    rgb(0, 0, 1) 0%,
    rgba(255, 255, 255, 0) 65%
  );
}
</style>