<template>
  <v-card rounded="xl" class="border">
    <v-card-title class="text-h5 font-weight-bold pt-6">
      Create Account
    </v-card-title>

    <v-card-subtitle class="pb-4">
      Join the RedditCopy community.
    </v-card-subtitle>

    <v-card-text>
      <v-form @submit.prevent="handleRegister">
        <v-text-field
          v-model="formData.name"
          label="Username"
          prepend-inner-icon="mdi mdi-account-outline"
          variant="outlined"
          :error-messages="errors.name"
        />

        <v-text-field
          v-model="formData.email"
          label="Email"
          prepend-inner-icon="mdi mdi-email-outline"
          variant="outlined"
          type="email"
          :error-messages="errors.email"
        />

        <v-text-field
          v-model="formData.password"
          label="Password"
          prepend-inner-icon="mdi mdi-lock-outline"
          type="password"
          variant="outlined"
          :error-messages="errors.password"
        />

        <v-text-field
          v-model="formData.password_confirmation"
          label="Confirm Password"
          prepend-inner-icon="mdi mdi-lock-check-outline"
          type="password"
          variant="outlined"
          :error-messages="errors.password_confirmation"
        />

        <v-btn
          color="primary"
          rounded="pill"
          size="large"
          block
          :loading="authStore.loading"
          type="submit"
        >
          Create Account
        </v-btn>

        <v-alert
          v-if="errors.general"
          type="error"
          variant="tonal"
          density="compact"
        >
          {{ errors.general }}
        </v-alert>
      </v-form>
    </v-card-text>

    <v-divider />

    <v-card-actions class="justify-center pa-6">
      <span class="text-medium-emphasis"> Already have an account? </span>

      <v-btn
        variant="text"
        color="text-primary"
        @click="authDialogStore.openLogin"
      >
        Log In
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { reactive } from 'vue';

import { useAuthDialogStore } from '../stores/authDialogStore';
import { useAuthStore } from '../stores/authStore';

const authStore = useAuthStore();
const authDialogStore = useAuthDialogStore();

const formData = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
});

const errors = reactive({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  general: '',
});

function clearErrors() {
  errors.name = '';
  errors.email = '';
  errors.password = '';
  errors.password_confirmation = '';
  errors.general = '';
}

function handleErrors(error) {
  clearErrors();

  if (error?.errors) {
    errors.name = error.errors.name?.[0] || '';
    errors.email = error.errors.email?.[0] || '';
    errors.password = error.errors.password?.[0] || '';
    errors.password_confirmation =
      error.errors.password_confirmation?.[0] || '';

    return;
  }

  errors.general = error?.message || 'Unable to create account.';
}

async function handleRegister() {
  clearErrors();

  try {
    await authStore.register(formData);

    authDialogStore.close();
  } catch (error) {
    handleErrors(error);
  }
}
</script>
