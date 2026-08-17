<template>
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
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
