<template>
  <v-card-item>
    <div class="flex justify-between">
      <div class="flex gap-2">
        <v-avatar size="32">
          <v-img
            :src="
              post.author?.avatar_url || '/images/profile-default-image.png'
            "
          />
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
</template>

<script setup>
import { formatDate } from '@/utils/date';

defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
