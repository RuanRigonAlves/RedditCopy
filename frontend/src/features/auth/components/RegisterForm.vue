<template>
  <v-card rounded="xl" class="border">
    <v-card-title class="text-h5 font-weight-bold pt-6">
      Create Account
    </v-card-title>

    <v-card-subtitle class="pb-4">
      Join the RedditCopy community.
    </v-card-subtitle>

    <v-card-text>
      <v-form ref="form" @submit.prevent="handleRegister">
        <v-text-field
          v-model="formData.name"
          label="Username"
          prepend-inner-icon="mdi mdi-account-outline"
          variant="outlined"
          :rules="[required]"
          :error-messages="errors.name"
        />

        <v-text-field
          v-model="formData.email"
          label="Email"
          prepend-inner-icon="mdi mdi-email-outline"
          variant="outlined"
          type="email"
          :rules="[required]"
          :error-messages="errors.email"
        />

        <v-text-field
          v-model="formData.password"
          label="Password"
          prepend-inner-icon="mdi mdi-lock-outline"
          type="password"
          variant="outlined"
          :rules="[required, minPassword]"
          :error-messages="errors.password"
        />

        <v-text-field
          v-model="formData.password_confirmation"
          label="Confirm Password"
          prepend-inner-icon="mdi mdi-lock-check-outline"
          type="password"
          variant="outlined"
          :rules="[required, passwordConfirmation]"
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
import { useAuthDialogStore } from '../stores/authDialogStore';
import { useAuthStore } from '../stores/authStore';
import { useRegisterForm } from '../composables/useRegisterForm';

const authDialogStore = useAuthDialogStore();
const authStore = useAuthStore();

const {
  form,
  formData,
  errors,
  required,
  minPassword,
  passwordConfirmation,
  submit,
  loading,
} = useRegisterForm();

async function handleRegister() {
  const success = await submit();

  if (success) {
    authDialogStore.close();
  }
}
</script>
