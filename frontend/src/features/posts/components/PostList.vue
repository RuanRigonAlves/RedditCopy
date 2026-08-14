<template>
  <div>
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
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
