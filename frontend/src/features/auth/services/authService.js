import { request } from '@/services/api.js';

export async function register(data) {
  return request('/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function login(data) {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function logout() {
  return request('/logout', {
    method: 'POST',
    _skipRefresh: true,
  });
}

export async function getMe(token) {
  return request('/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
}
