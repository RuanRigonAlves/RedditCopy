import { ref } from 'vue';
import * as postService from '../services/postService.js';

export function usePosts() {
  const posts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function fetchPosts() {
    loading.value = true;
    error.value = null;

    try {
      const response = await postService.getPosts();

      posts.value = response.data;
    } catch (err) {
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  return {
    posts,
    loading,
    error,
    fetchPosts,
  };
}
