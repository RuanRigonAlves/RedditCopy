<template>
  <v-card rounded="xl" class="border">
    <v-card-title class="text-h5 font-weight-bold pt-6"> Log In </v-card-title>

    <v-card-subtitle class="pb-4">
      Welcome back! Log in to continue.
    </v-card-subtitle>

    <v-card-text>
      <v-form class="d-flex flex-column ga-4">
        <v-text-field
          label="Email"
          prepend-inner-icon="mdi mdi-account-outline"
          variant="outlined"
          density="comfortable"
        />

        <v-text-field
          label="Password"
          prepend-inner-icon="mdi mdi-lock-outline"
          variant="outlined"
          density="comfortable"
          type="password"
        />

        <v-btn variant="text" class="px-0 mb-1">Forgot your password?</v-btn>

        <v-btn color="primary" size="large" rounded="pill" block>
          Log In
        </v-btn>
      </v-form>
    </v-card-text>

    <v-divider />

    <v-card-actions class="justify-center pa-6">
      <span class="text-medium-emphasis"> New to RedditCopy? </span>

      <v-btn variant="text" color="text-primary" @click="auth.openRegister">
        Sign Up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useAuthDialogStore } from "../stores/authStore";

const auth = useAuthDialogStore();
</script>
