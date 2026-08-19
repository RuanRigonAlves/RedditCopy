<template>
  <v-card-actions class="min-h-8">
    <v-card
      rounded="pill"
      variant="tonal"
      class="flex items-center"
      height="32"
    >
      <v-btn icon="mdi mdi-arrow-up-bold-outline" size="x-small"></v-btn>

      <span class="text-xs font-semibold">2.3k</span>

      <v-btn icon="mdi mdi-arrow-down-bold-outline" size="x-small"></v-btn>
    </v-card>

    <v-btn
      variant="tonal"
      rounded
      prepend-icon="mdi mdi-comment-outline"
      height="32"
      size="x-small"
    >
      <span class="text-xs font-semibold"> 23 </span>
    </v-btn>
  </v-card-actions>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
