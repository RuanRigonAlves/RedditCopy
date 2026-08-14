import { request } from '@/services/api.js';

export async function getPosts(page = 1) {
  return request(`/posts?page=${page}`);
}

export async function getPost(id) {
  return request(`/posts/${id}`);
}

export async function createPost(data) {
  return request('/posts', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function updatePost(id, data) {
  return request(`/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function deletePost(id) {
  return request(`/posts/${id}`, {
    method: 'DELETE',
  });
}
