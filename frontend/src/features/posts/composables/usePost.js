import { ref } from 'vue';
import * as postService from '../services/postService';

export function usePost() {
  const post = ref(null);
  const loading = ref(false);
  const error = ref(null);

  async function fetchPost(id) {
    loading.value = true;

    try {
      const response = await postService.getPost(id);

      post.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  return {
    post,
    loading,
    error,
    fetchPost,
  };
}
