import axios from 'axios';

axios.defaults.baseURL = 'https://641038fb864814e5b64aed70.mockapi.io/todo';

export const getTodos = async () => {
  const { data } = await axios.get('/todo');
  return data;
};
