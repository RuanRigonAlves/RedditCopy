import { request } from '@/services/api';

export async function getComments(post) {
  return request(`/posts/${post}/comments`);
}

export async function createPost(post, data) {
  return request(`/posts/${post}/comments`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function createRepply(comment, data) {
  return request(`/comments/${comment}/replies`, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function updateComment(comment, data) {
  return request(`/comments/${comment}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function deletePost(comment) {
  return request(`/comments/${comment}`, {
    method: 'DELETE',
  });
}
