import { removeTodo, upDateTodo } from 'api/ApiTodo';
import React from 'react';
import { useMutation, useQueryClient } from 'react-query';

type Props = {
  completed: boolean;
  text: string;
  id: string;
};

const TodoItem = ({ completed, text, id }: Props) => {
  const queryClient = useQueryClient();
  const mutationRemove = useMutation(removeTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const mutationUpdate = useMutation(upDateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleCompleted = (id: string, completed: boolean) => {
    const query = { id, completed };
    mutationUpdate.mutate(query);
  };

  const handleDelete = (id: string) => {
    mutationRemove.mutate(id);
  };

  console.log('Render');

  return (
    <li className=" flex flex-col justify-between gap-2 border rounded-lg text-xs p-2 dark:bg-slate-900 dark:text-slate-300">
      <div className={`${completed ? 'line-through' : ''} flex flex-col gap-2`}>
        <p>
          <span className="font-bold text-sm">Body :</span> {text}
        </p>
      </div>
      <div
        className={`${
          completed ? 'bg-teal-200' : 'bg-red-200'
        }  rounded-lg flex justify-center items-center h-8 w-full cursor-pointer`}
      >
        <p
          onClick={() => handleCompleted(id, !completed)}
          className="dark:text-slate-900 flex-grow text-center"
        >
          {completed ? 'DONE' : 'IN PROGRESS'}
        </p>
        <button
          onClick={() => handleDelete(id)}
          className=" h-full px-5 rounded-md bg-red-400"
          type="button"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
