<template>
  <v-card rounded="xl" class="border">
    <v-card-title class="text-h5 font-weight-bold pt-6">
      Create Account
    </v-card-title>

    <v-card-subtitle class="pb-4">
      Join the RedditCopy community.
    </v-card-subtitle>

    <v-card-text>
      <v-form class="d-flex flex-column ga-4">
        <v-text-field
          label="Username"
          prepend-inner-icon="mdi mdi-account-outline"
          variant="outlined"
        />

        <v-text-field
          label="Email"
          prepend-inner-icon="mdi mdi-email-outline"
          variant="outlined"
        />

        <v-text-field
          label="Password"
          prepend-inner-icon="mdi mdi-lock-outline"
          type="password"
          variant="outlined"
        />

        <v-text-field
          label="Confirm Password"
          prepend-inner-icon="mdi mdi-lock-check-outline"
          type="password"
          variant="outlined"
        />

        <v-btn color="primary" rounded="pill" size="large" block>
          Create Account
        </v-btn>
      </v-form>
    </v-card-text>

    <v-divider />

    <v-card-actions class="justify-center pa-6">
      <span class="text-medium-emphasis"> Already have an account? </span>

      <v-btn variant="text" color="text-primary" @click="auth.openLogin">
        Log In
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useAuthDialogStore } from "../stores/authStore";

const auth = useAuthDialogStore();
</script>
