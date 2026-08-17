<template>
  <div class="flex items-center px-2 py-1 gap-4">
    <v-select
      v-model="sort"
      :items="sortOptions"
      item-title="title"
      item-value="value"
      variant="plain"
      hide-details
      density="compact"
      max-width="70px"
      class="text-textGrey sort-select"
    >
    </v-select>

    <v-select
      v-model="sortLocation"
      :items="sortLocationOptions"
      item-title="title"
      item-value="value"
      variant="plain"
      hide-details
      density="compact"
      max-width="100px"
      class="text-textGrey sort-select"
    >
    </v-select>
  </div>
  <v-divider> </v-divider>
</template>

<script setup>
import { ref } from 'vue';

const sort = ref('latest');
const sortLocation = ref('Everywhere');

const sortOptions = [
  { title: 'Latest', value: 'latest' },
  { title: 'Best', value: 'best' },
  { title: 'Oldest', value: 'oldest' },
];

const sortLocationOptions = [
  { title: 'Everywhere', value: null },
  { title: 'Brazil', value: 'BR' },
  { title: 'United States', value: 'US' },
];
</script>

<style scoped>
.sort-select :deep(.v-field__input) {
  font-size: 13px;
}

.sort-select :deep(.v-field__append-inner .v-icon) {
  font-size: 13px;
  transform: translateY(4px);
}
</style>
