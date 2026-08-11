import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import * as authService from '../services/authService';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const token = ref(localStorage.getItem('token'));
  const loading = ref(false);
  const authLoading = ref(false);

  const isAuthenticated = computed(() => {
    return !!token.value;
  });

  async function login(credentials) {
    loading.value = true;

    try {
      const response = await authService.login(credentials);

      user.value = response.user;
      token.value = response.token;

      localStorage.setItem('token', response.token);

      return response;
    } finally {
      loading.value = false;
    }
  }

  async function register(data) {
    loading.value = true;

    try {
      const response = await authService.register(data);

      user.value = response.user;
      token.value = response.token;

      localStorage.setItem('token', response.token);

      return response;
    } finally {
      loading.value = false;
    }
  }

  async function getMe() {
    if (!token.value) {
      return;
    }

    loading.value = true;

    try {
      const response = await authService.getMe();

      user.value = response.user;
    } catch (error) {
      logout();
    } finally {
      loading.value = false;
    }
  }

  async function logout() {
    loading.value = true;

    try {
      if (token.value) {
        await authService.logout();
      }
    } finally {
      user.value = null;
      token.value = null;

      localStorage.removeItem('token');

      loading.value = false;
    }
  }

  async function refreshToken() {
    const refreshed = await authService.refresh();

    if (!refreshed) {
      logout();
      return false;
    }

    token.value = localStorage.getItem('token');

    return true;
  }

  return {
    user,
    token,
    loading,
    isAuthenticated,
    authLoading,
    login,
    register,
    getMe,
    logout,
    refreshToken,
  };
});
