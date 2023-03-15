import React from 'react';

type Props = {
  completed: boolean;
  text: string;
  title: string;
};

const TodoItem = ({ completed, text, title }: Props) => {
  return (
    <li className="relative flex flex-col justify-between gap-2 border rounded-lg text-xs p-2 dark:bg-slate-900 dark:text-slate-300">
      <div className={`${completed ? 'line-through' : ''} flex flex-col gap-2`}>
        <h2>
          <span className="font-bold text-sm">Title :</span> {title}
        </h2>
        <p>
          <span className="font-bold text-sm">Body :</span> {text}
        </p>
      </div>
      <div
        className={`${
          completed ? 'bg-teal-200' : 'bg-red-200'
        } rounded-lg flex justify-center items-center h-8 w-full cursor-pointer`}
      >
        <p className="dark:text-slate-900">
          {completed ? 'DONE' : 'IN PROGRESS'}
        </p>
      </div>
      <button
        className="absolute top-3 right-2 px-5 rounded-md bg-red-600"
        type="button"
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
