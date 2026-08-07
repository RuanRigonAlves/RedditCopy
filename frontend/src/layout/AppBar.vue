<template>
  <v-app-bar
    density="comfortable"
    class="justify-between w-100 border-b"
    :flat="true"
  >
    <section class="flex justify-between w-full mx-2">
      <!-- List Menu -->
      <div>
        <v-btn color="primary" @click="drawer = !drawer">
          <v-icon icon="mdi mdi-menu" size="24"></v-icon>
        </v-btn>
      </div>

      <!-- Search bar -->
      <div>
        <v-text-field
          density="compact"
          placeholder="Search"
          prepend-inner-icon="mdi mdi-magnify"
          color="primary"
          variant="outlined"
          width="200"
          flat
          hide-details
          single-line
          rounded="pill"
          class="search-field"
        ></v-text-field>
      </div>

      <!-- Right Side Login/Etc -->
      <div>
        <v-btn
          variant="tonal"
          class="bg-primary"
          rounded
          @click="auth.openLogin()"
        >
          Login
        </v-btn>
      </div>
    </section>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="left" width="250">
    <v-list>
      <v-list-item title="Home" />
      <v-list-item title="Popular" />
      <v-list-item title="All" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { useAuthDialogStore } from "@/features/auth/stores/authStore";
import { ref } from "vue";

const drawer = ref(false);
const auth = useAuthDialogStore();
</script>

<style scoped>
.search-field :deep(.v-field__outline) {
  color: rgb(var(--v-theme-primary));
  border-width: 1px;
}
</style>
