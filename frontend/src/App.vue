<template>
  <v-app>
    <v-main>
      <app-bar></app-bar>

      <auth-dialog></auth-dialog>

      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted } from 'vue';

import AuthDialog from './features/auth/components/AuthDialog.vue';
import AppBar from './layout/AppBar.vue';

import { useAuthStore } from './features/auth/stores/authStore.js';

const authStore = useAuthStore();

onMounted(() => {
  authStore.getMe();
});
</script>
