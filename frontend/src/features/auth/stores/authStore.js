import { defineStore } from "pinia";
import { computed, ref } from "vue";

import LoginForm from "../components/LoginForm.vue";
import RegisterForm from "../components/RegisterForm.vue";

export const useAuthDialogStore = defineStore("authDialog", () => {
  const dialogOpen = ref(false);
  const mode = ref(null);

  function openLogin() {
    mode.value = "login";
    dialogOpen.value = true;
  }

  function openRegister() {
    mode.value = "register";
    dialogOpen.value = true;
  }

  function close() {
    dialogOpen.value = false;
  }

  const currentComponent = computed(() => {
    switch (mode.value) {
      case "register":
        return RegisterForm;
      default:
        return LoginForm;
    }
  });

  return {
    dialogOpen,
    mode,
    currentComponent,
    openLogin,
    openRegister,
    close,
  };
});
