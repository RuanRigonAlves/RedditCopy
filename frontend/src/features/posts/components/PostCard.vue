<template>
  <v-card variant="flat" rounded="lg">
    <v-card-item>
      <div class="flex justify-between">
        <div class="flex gap-2">
          <v-avatar size="24">
            <v-icon class="mdi">mdi-account</v-icon>
          </v-avatar>

          <div class="flex items-end text-xs">
            <div class="font-weight-medium">
              {{ post.author.name }}
            </div>

            <span class="mdi mdi-circle-small p-0 text-textGrey"></span>

            <div class="text-caption text-textGrey">
              {{ formatDate(post.created_at) }}
            </div>
          </div>
        </div>

        <div>
          <v-btn
            size="small"
            variant="text"
            rounded
            icon="mdi mdi-dots-horizontal"
            height="20"
          ></v-btn>
        </div>
      </div>
    </v-card-item>

    <v-card-title class="py-0 text-base font-semibold text-wrap">
      {{ post.title }}
    </v-card-title>

    <v-card-text class="py-0 text-textGrey line-clamp-5">
      {{ post.content }}
    </v-card-text>

    <v-card-actions>
      <v-card
        rounded="pill"
        variant="tonal"
        class="flex items-center"
        height="32"
      >
        <v-btn icon="mdi mdi-arrow-up-bold-outline" size="small"></v-btn>

        <span>2.3k</span>
        <v-btn icon="mdi mdi-arrow-down-bold-outline" size="small"></v-btn>
      </v-card>

      <v-btn
        variant="tonal"
        rounded
        prepend-icon="mdi mdi-comment-outline"
        height="32"
      >
        23
      </v-btn>
    </v-card-actions>

    <v-divider> </v-divider>
  </v-card>
</template>

<script setup>
import { formatDate } from '@/utils/date';

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

console.log(props.post);
</script>
