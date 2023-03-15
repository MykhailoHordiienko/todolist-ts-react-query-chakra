import axios from 'axios';

axios.defaults.baseURL = 'https://641038fb864814e5b64aed70.mockapi.io/todo';

type Todo = {
  completed: boolean;
  id: string;
  text: string;
  title: string;
};

type DataTodos = {
  data: Todo[];
};

export const getTodos = async () => {
  const { data } = await axios.get<DataTodos>('/todo');
  return data;
};
