<template>
  <v-theme-provider theme="dark">
    <v-form v-model="valid" class="text-white" @submit.prevent="LogIn()">
      <v-container class="px-0">
        <v-text-field
          v-model="form.usuario"
          label="Usuario"
          placeholder="Tu usuario"
          :rules="[r.required, r.email]"
          required
          clearable
        />
        <v-text-field
          v-model="form.password"
          label="Contraseña"
          type="password"
          :rules="[r.required, r.min]"
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
      @click="LoginGoogle()"
      :loading="loadingGoogle"
    >
      Iniciar sesión con Google
      <template #prepend>
        <v-icon>mdi-google</v-icon>
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
import { auth } from "@/plugins/Firebase/firebase";
import { createUserInFirestore } from "@/plugins/Firebase/firestore";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRoute, useRouter } from "vue-router";
//import { useAuthStore } from "@/store/auth";

const route = useRoute();
const router = useRouter();
//const auth = useAuthStore();

const form = reactive({ usuario: "", password: "" });
const valid = ref(false);
const loading = ref(false);
const loadingGoogle = ref(false);

const r = {
  required: (v) => !!v || "Requerido",
  email: (v) => /.+@.+\..+/.test(v) || "Email inválido",
  min: (v) => v?.length >= 6 || "Mínimo 6 caracteres",
};

async function LogIn() {
  if (!valid.value || loading.value) return;
  loading.value = true;
  try {
    const userlogged = await signInWithEmailAndPassword(
      auth,
      form.usuario,
      form.password
    );
    console.log(userlogged.user);
    const newUser = {
      id: userlogged.user.uid,
      email: userlogged.user.email,
      nombre: userlogged.user.displayName || "Usuario",
      rol: "paciente",
    };
    createUserInFirestore(newUser);
    router.push("/dashboard");
    // const next = route.query.next || "/encuesta";
    // const path = Array.isArray(next) ? next[0] : next;
    // await router.push(path);
  } catch (e) {
    console.error("Login error:", e);
    alert("Error al registrarse: " + e.message);
  } finally {
    loading.value = false;
  }
}

async function LoginGoogle() {
  try {
    loadingGoogle.value = true;
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    const token = GoogleAuthProvider.credentialFromResult(result).accessToken;
    const userlogged = result.user;
    console.log("Google user:", userlogged);
    const newUser = {
      id: userlogged.uid,
      email: userlogged.email,
      nombre: userlogged.displayName || "Usuario",
      rol: "paciente",
    };
    console.log("Google user:", newUser);
    createUserInFirestore(newUser);
  } catch (error) {
    console.log(error.message);
  } finally {
    loadingGoogle.value = false;
    router.push("/dashboard");
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