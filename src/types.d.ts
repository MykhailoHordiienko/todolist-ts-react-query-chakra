export type Todo = {
  date: Date;

  completed: boolean;
  id: string;
  text: string;
};

export type MutationType = {
  date?: Date;
  completed?: boolean;
  id?: string;
  text?: string;
};
