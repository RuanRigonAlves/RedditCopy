import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/authStore';

export function useRegisterForm() {
  const authStore = useAuthStore();

  const form = ref(null);

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

  const required = (value) => {
    return !!value || 'This field is required.';
  };

  const minPassword = (value) => {
    return value?.length >= 8 || 'Password must have at least 8 characters.';
  };

  const passwordConfirmation = (value) => {
    return value === formData.password || 'Passwords do not match.';
  };

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

  async function submit() {
    clearErrors();

    const { valid } = await form.value.validate();

    if (!valid) {
      return false;
    }

    try {
      await authStore.register(formData);

      return true;
    } catch (error) {
      handleErrors(error);

      return false;
    }
  }

  return {
    form,
    formData,
    errors,
    required,
    minPassword,
    passwordConfirmation,
    submit,
  };
}
