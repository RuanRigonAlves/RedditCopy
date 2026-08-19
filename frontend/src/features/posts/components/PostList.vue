<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <PostCard :post="post" :to="{ name: 'post', params: { id: post.id } }" />
      <v-divider> </v-divider>
    </div>
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
