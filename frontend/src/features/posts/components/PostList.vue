<template>
  <div>
    <PostCard
      v-for="post in posts"
      :key="post.id"
      :post="post"
      :to="{ name: 'post', params: { id: post.id } }"
    />
  </div>
</template>

<script setup>
import PostCard from './PostCard.vue';

defineProps({
  posts: {
    type: Array,
    required: true,
  },
});
</script>
