<template>
  <v-container class="px-0 py-0">
    <template v-if="loading">
      <v-skeleton-loader v-for="i in 3" :key="i" type="article" class="mb-4" />
    </template>

    <PostList v-else :posts="posts" />
  </v-container>
</template>

<script setup>
import { onMounted, watch } from 'vue';

import { usePosts } from '@/features/posts/composables/usePosts';
import PostList from '@/features/posts/components/PostList.vue';

const { posts, loading, error, fetchPosts } = usePosts();

onMounted(() => {
  fetchPosts();
});
</script>
