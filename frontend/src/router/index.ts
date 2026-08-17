/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/pages/index.vue';
import PostPage from '@/features/posts/pages/PostPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: PostPage,
    },
  ],
});

export default router;
