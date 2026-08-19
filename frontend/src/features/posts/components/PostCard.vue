<template>
  <v-card variant="flat" rounded="lg" class="px-4 pb-2 pt-3">
    <!-- Header -->
    <post-card-header :post="post" class="p-0 pb-2" />

    <!-- Content -->
    <v-card-title class="p-0 mb-1 text-base font-semibold text-wrap">
      {{ post.title }}
    </v-card-title>

    <v-card-text class="p-0 text-textGrey line-clamp-5">
      {{ post.content }}
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora illo
      corporis incidunt laudantium aut impedit nihil earum sunt debitis nam vel,
      quasi commodi nostrum quo doloremque assumenda quibusdam architecto
      deleniti! Libero tempore qui minima, commodi, corporis laboriosam et minus
      facere a quae voluptatibus dolorem dolore molestiae quia quisquam quo
      inventore error veritatis eveniet obcaecati similique. Explicabo eaque
      velit nam labore! Natus dolores laudantium aperiam aut distinctio earum,
      quia doloremque deserunt quos ullam sint quaerat quod assumenda impedit
      cumque quibusdam dignissimos ipsa reiciendis iusto atque in alias.
      Reiciendis cumque est fugit? Quidem possimus dolorem ratione officiis
      quae, eius doloribus fuga, dolorum delectus corporis deleniti saepe
      itaque! Voluptates nemo nulla ab, corrupti earum eos voluptatum ipsam
      architecto sequi minima inventore possimus fugit.
    </v-card-text>

    <!-- Actions -->
    <post-card-options :post="post" class="p-0 pt-4" />
  </v-card>
</template>

<script setup>
import PostCardHeader from './PostCardHeader.vue';
import PostCardOptions from './PostCardOptions.vue';

defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
