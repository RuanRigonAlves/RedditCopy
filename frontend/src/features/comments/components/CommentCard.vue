<template>
  <v-card variant="flat">
    <div class="flex gap-2">
      <v-avatar size="32">
        <v-img
          :src="comment.user?.avatar_url || '/images/profile-default-image.png'"
        />
      </v-avatar>

      <div class="flex items-end text-xs">
        <div class="font-weight-medium">
          {{ comment.user?.name || '[ DELETED ]' }}
        </div>

        <span class="mdi mdi-circle-small p-0 text-textGrey"></span>

        <div class="text-caption text-textGrey">
          {{ formatDate(comment.created_at) }}
        </div>
      </div>
    </div>

    <!-- Comment Content -->
    <div class="grid grid-cols-[32px_1fr] items-stretch">
      <div class="flex justify-center">
        <div
          class="w-px h-full bg-gray-600"
          v-if="comment.replies.length"
        ></div>
      </div>

      <div>
        <v-card-text class="pb-0 px-0 pt-2">
          {{ comment.content }}
        </v-card-text>

        <!-- Comment Actions -->
        <v-card-actions class="py-0 px-0 max-h-8 min-h-0">
          <v-card
            rounded="pill"
            variant="flat"
            class="flex items-center"
            height="32"
          >
            <v-btn
              icon="mdi mdi-arrow-up-bold-outline text-textGrey"
              size="x-small"
            ></v-btn>

            <span class="text-xs text-textGrey">4</span>
            <v-btn
              icon="mdi mdi-arrow-down-bold-outline text-textGrey"
              size="x-small"
            ></v-btn>
          </v-card>

          <v-btn
            size="x-small"
            variant="flat"
            rounded
            prepend-icon="mdi mdi-comment-outline"
            height="32"
            class="text-textGrey"
          >
            <span class="text-textGrey">Reply</span>
          </v-btn>

          <v-btn
            size="small"
            variant="text"
            height="32"
            icon="mdi mdi-dots-horizontal"
            class="text-textGrey"
          ></v-btn>
        </v-card-actions>

        <!-- Comment Replies -->
        <div
          v-if="comment.replies.length"
          v-for="reply in comment.replies"
          :key="reply.id"
          class="relative"
        >
          <div
            class="absolute -left-[15px] top-[18px] w-[20px] h-px bg-gray-600"
          ></div>

          <CommentCard :comment="reply" />
        </div>
      </div>
    </div>
  </v-card>
</template>

<script setup>
import { formatDate } from '@/utils/date';

defineProps({
  comment: {
    type: Object,
    required: true,
  },
});
</script>
