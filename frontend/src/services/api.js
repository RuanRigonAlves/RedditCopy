const API_URL = import.meta.env.VITE_API_URL;

export async function request(url, options = {}) {
  const token = localStorage.getItem('token');

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${url}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (response.status === 401 && !options._skipRefresh) {
    const refreshed = await refreshToken();

    if (refreshed) {
      return request(url, {
        ...options,
        _skipRefresh: true,
      });
    }
  }

  if (!response.ok) {
    throw {
      ...data,
      status: response.status,
    };
  }

  return data;
}

async function refreshToken() {
  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }

  try {
    const response = await fetch(`${API_URL}/refresh`, {
      method: 'POST',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();

    localStorage.setItem('token', data.token);

    return true;
  } catch {
    return false;
  }
}
