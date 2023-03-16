export type Todo = {
  completed: boolean;
  id: string;
  text: string;
};

export type DataTodos = {
  data: Todo[];
};

export type Arrow = {
  foo: () => void;
};

export type MutationType = {
  completed?: boolean;
  id?: string;
  text?: string;
};
