<template>
  <v-card variant="flat" rounded="lg">
    <!-- Header -->
    <post-card-header :post="post" />

    <!-- Content -->
    <v-card-title class="py-0 text-base font-semibold text-wrap">
      {{ post.title }}
    </v-card-title>

    <v-card-text class="py-0 text-textGrey line-clamp-5">
      {{ post.content }}
    </v-card-text>

    <!-- Actions -->
    <post-card-options :post="post" />

    <v-divider> </v-divider>
  </v-card>
</template>

<script setup>
import { formatDate } from '@/utils/date';
import PostCardHeader from './PostCardHeader.vue';
import PostCardOptions from './PostCardOptions.vue';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

console.log(props.post);
</script>
