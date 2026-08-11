<template>
  <v-card rounded="xl" class="border">
    <v-card-title class="text-h5 font-weight-bold pt-6"> Log In </v-card-title>

    <v-card-subtitle class="pb-4">
      Welcome back! Log in to continue.
    </v-card-subtitle>

    <v-card-text>
      <v-form ref="form" @submit.prevent="handleLogin">
        <v-text-field
          v-model="formData.email"
          label="Email"
          prepend-inner-icon="mdi mdi-account-outline"
          variant="outlined"
          density="comfortable"
          type="email"
          :rules="[required]"
          :error-messages="errors.email"
        />

        <v-text-field
          v-model="formData.password"
          label="Password"
          prepend-inner-icon="mdi mdi-lock-outline"
          variant="outlined"
          density="comfortable"
          type="password"
          :rules="[required]"
          :error-messages="errors.password"
        />

        <v-btn variant="text" class="px-0 mb-1">Forgot your password?</v-btn>

        <v-btn
          color="primary"
          size="large"
          rounded="pill"
          block
          type="submit"
          :loading="authStore.loading"
        >
          Log In
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
      <span class="text-medium-emphasis"> New to RedditCopy? </span>

      <v-btn
        variant="text"
        color="text-primary"
        @click="authDialogStore.openRegister"
      >
        Sign Up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { useLoginForm } from '../composables/useLoginForm';
import { useAuthDialogStore } from '../stores/authDialogStore';
import { useAuthStore } from '../stores/authStore';

const authDialogStore = useAuthDialogStore();
const authStore = useAuthStore();

const { form, formData, errors, required, submit, loading } = useLoginForm();

async function handleLogin() {
  const success = await submit();

  if (success) {
    authDialogStore.close();
  }
}
</script>
