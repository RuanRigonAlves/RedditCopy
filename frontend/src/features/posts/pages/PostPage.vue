<template>
  <v-container>
    <div>
      <template v-if="postLoading">
        <v-skeleton-loader
          v-for="i in 3"
          :key="i"
          type="article"
          class="mb-4"
        />
      </template>

      <template v-else-if="post">
        <!-- Header -->
        <PostCardHeader :post="post" />

        <!-- Content -->
        <v-card-title class="py-0 text-base font-semibold text-wrap">
          {{ post.title }}
        </v-card-title>

        <v-card-text class="py-0 text-textGrey">
          {{ post.content }}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident ab
          expedita, in delectus at, quas numquam error obcaecati eum
          exercitationem modi, perferendis praesentium odit magnam qui ad
          doloribus culpa aspernatur. Nisi repellat beatae rem officiis? Aliquam
          quasi a est. Porro tempore culpa beatae, eum deserunt repudiandae at,
          atque dignissimos debitis nemo neque ut fugiat? Quo praesentium
          consequatur molestias repellat omnis?
        </v-card-text>

        <!-- Options -->
        <PostCardOptions :post="post" />
      </template>
    </div>

    <section class="flex flex-col gap-4 mt-4">
      <CommentCard
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </section>
  </v-container>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { usePost } from '../composables/usePost';
import { useComments } from '@/features/comments/composables/useComments.js';
import PostCardHeader from '../components/PostCardHeader.vue';
import PostCardOptions from '../components/PostCardOptions.vue';
import CommentCard from '@/features/comments/components/CommentCard.vue';

const route = useRoute();

const { post, loading: postLoading, error: postError, fetchPost } = usePost();

const {
  comments,
  loading: commentLoading,
  error: commentError,
  fetchComments,
} = useComments();

onMounted(async () => {
  const postId = route.params.id;

  await Promise.all([fetchPost(postId), fetchComments(postId)]);

  console.log(post);
  console.log(comments);
});
</script>
