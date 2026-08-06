<template>
  <v-app>
    <v-main>
      <app-bar></app-bar>

      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from "./layout/AppBar.vue";
</script>
