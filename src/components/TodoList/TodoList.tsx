import TodoItem from 'components/TodoItem/TodoItem';
import React from 'react';
import { Todo } from 'types';

type Props = {
  toDos: Todo[];
};

const TodoList = ({ toDos }: Props) => {
  console.log(toDos);
  return (
    <div className=" dark:text-slate-200 dark:bg-slate-500 dark:shadow-white p-5 lg:max-w-5xl xl:max-w-7xl rounded-2xl shadow-xl m-auto font-semibold bg-slate-100 text-slate-900 mt-10 h-[350px] md:h-[550px] overflow-y-scroll scrollbar-none">
      <ul className="grid grid-cols-2 gap-2 ">
        {toDos.map(({ id, completed, text, title }) => (
          <TodoItem key={id} completed={completed} text={text} title={title} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
