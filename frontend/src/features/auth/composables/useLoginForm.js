import { ref, reactive } from 'vue';
import { useAuthStore } from '../stores/authStore';

export function useLoginForm() {
  const authStore = useAuthStore();

  const form = ref(null);

  const formData = reactive({
    email: '',
    password: '',
  });

  const errors = reactive({
    email: '',
    password: '',
    general: '',
  });

  const required = (value) => {
    return !!value || 'This field is required.';
  };

  function clearErrors() {
    errors.email = '';
    errors.password = '';
    errors.general = '';
  }

  function handleErrors(error) {
    clearErrors();

    if (error?.errors) {
      errors.email = error.errors.email?.[0] || '';
      errors.password = error.errors.password?.[0] || '';

      return;
    }

    errors.general = error?.message || 'Unable to log in.';
  }

  async function submit() {
    clearErrors();

    const { valid } = await form.value.validate();

    if (!valid) {
      return false;
    }

    try {
      await authStore.login(formData);

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
    submit,
  };
}
