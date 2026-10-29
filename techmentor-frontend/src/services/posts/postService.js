
import API from '../API';

export async function getPosts(params = {}) {
  const res = await API.get('/posts', { params });
  return res.data;
}

export async function getPostById(id) {
  const res = await API.get(`/posts/${id}`);
  return res.data;
}

export async function createPost(data) {
  const res = await API.post('/posts', data);
  return res.data;
}

export async function updatePost(id, data) {
  const res = await API.put(`/posts/${id}`, data);
  return res.data;
}

export async function deletePost(id) {
  const res = await API.delete(`/posts/${id}`);
  return res.data;
}
