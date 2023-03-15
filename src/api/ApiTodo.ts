import axios from 'axios';

axios.defaults.baseURL = 'https://641038fb864814e5b64aed70.mockapi.io/todo';

export const getTodos = async () => {
  const { data } = await axios.get('/todo');
  return data;
};

export const addTodo = async (query: { text: string; completed: boolean }) => {
  await axios.post('/todo', query);
};

export const removeTodo = async (id: string) => {
  await axios.delete(`/todo/${id}`);
};

export const upDateTodo = async (query: { id: string; completed: boolean }) => {
  await axios.put(`/todo/${query.id}`, query);
};
