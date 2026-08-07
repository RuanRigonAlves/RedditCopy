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
import AuthDialog from "./features/auth/components/AuthDialog.vue";
import AppBar from "./layout/AppBar.vue";
</script>
