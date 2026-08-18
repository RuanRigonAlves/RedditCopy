import { ref } from 'vue';
import * as commentService from '../services/commentService';

export function useComments() {
  const comments = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchComments(postId) {
    loading.value = true;

    try {
      const response = await commentService.getComments(postId);

      console.log(response.data);

      comments.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  return {
    comments,
    loading,
    error,
    fetchComments,
  };
}
