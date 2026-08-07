<template>
  <v-dialog v-model="auth.dialogOpen">
    <component :is="auth.currentComponent"></component>
  </v-dialog>
</template>

<script setup lang="ts">
import { useAuthDialogStore } from "@/features/auth/stores/authStore.js";

const auth = useAuthDialogStore();
</script>
