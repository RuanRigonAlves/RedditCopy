const API_URL = import.meta.env.VITE_API_URL;

async function request(url, options = {}) {
  const response = await fetch(`${API_URL}${url}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}

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

export async function logout(token) {
  return request('/logout', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getMe(token) {
  return request('/me', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
}
