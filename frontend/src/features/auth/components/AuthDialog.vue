<template>
  <v-dialog v-model="authDialogStore.dialogOpen">
    <component :is="authDialogStore.currentComponent"></component>
  </v-dialog>
</template>

<script setup lang="ts">
import { useAuthDialogStore } from '@/features/auth/stores/authDialogStore.js';

const authDialogStore = useAuthDialogStore();
</script>
