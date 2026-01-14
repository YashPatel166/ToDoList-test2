export const http = {
  get: async (url, options = {}) => {
    const response = await fetch(url, {
      method: 'GET',
      ...options,
    });
    return response.json();
  },
  post: async (url, data, options = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });
    return response.json();
  },
  put: async (url, data, options = {}) => {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });
    return response.json();
  },
  delete: async (url, options = {}) => {
    const response = await fetch(url, {
      method: 'DELETE',
      ...options,
    });
    return response.json();
  },
};

export default http;

