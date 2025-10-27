<template>
  
     <v-form v-model="valid" class="text-white" @submit.prevent="registrarse()">
      <v-container class="px-0">
        <v-text-field class="mb-2" v-model="form.usuario" label="Usuario" placeholder="Tu usuario" :rules="[r.required, r.email]"
          required clearable />
        <v-text-field v-model="form.password" label="Contraseña" type="password" :rules="[r.required, r.min]" required
          clearable />
        <v-btn block class="my-5 bg-transparent" elevation="4" variant="tonal" size="large" type="submit"
          :disabled="!valid || loading" :loading="loading">
          Registrarse
          <template #append>
            <v-icon>mdi-arrow-right</v-icon>
          </template>
        </v-btn>
      </v-container>
    </v-form>
    <v-divider color="white"></v-divider>
    
    <v-btn id="google" block class="my-5 text-white bg-google text-left" elevation="4" variant="tonal" size="large"
      jutify-start>
      Iniciar sesion con Google
      <template v-slot:prepend>
        <v-icon>mdi-google</v-icon>
      </template>
    </v-btn>
    <v-btn id="facebook" block class="my-5 text-white bg-facebook" elevation="4" variant="tonal" size="large">
      Iniciar sesion con Facebook
      <template v-slot:prepend>
        <v-icon>mdi-facebook</v-icon>
      </template>
    </v-btn>
    <v-btn id="apple" block class="my-5 text-white" variant="tonal" size="large" elevation="4">
      Iniciar sesion con Apple
      <template v-slot:prepend>
        <v-icon>mdi-apple</v-icon>
      </template>
    </v-btn>
  
</template>
<script setup>
import { reactive, ref } from "vue";
import { auth } from "@/plugins/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const form = reactive({ usuario: "", password: "" });
const valid = ref(false);
const loading = ref(false);

const r = {
  required: (v) => !!v || "Requerido",
  email: (v) => /.+@.+\..+/.test(v) || "Email inválido",
  min: (v) => v?.length >= 6 || "Mínimo 6 caracteres",
};


async function registrarse() {

  try {
    loading.value = true;
    const usersignup = await createUserWithEmailAndPassword(auth, form.usuario, form.password);
    console.log(usersignup);
    // Aquí puedes redirigir al usuario o mostrar un mensaje de éxito
  } catch (error) {
    console.error( error);
    alert("Error al registrarse: " + error.message);
  } finally {
    loading.value = false;
  }
  
}

</script>