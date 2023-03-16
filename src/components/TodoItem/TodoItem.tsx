import { removeTodo, upDateTodo } from 'api/ApiTodo';
import { useTodosMutation } from 'Hooks/useTodosMutation';

import { Todo } from 'types';

const TodoItem = ({ completed, text, id }: Todo) => {
  const { mutate: deleteTodo, isLoading: isLoadingDelete } =
    useTodosMutation(removeTodo);
  const { mutate: toggleTodo, isLoading: isLoadingUpdate } =
    useTodosMutation(upDateTodo);

  const handleCompleted = (id: string, completed: boolean) => {
    const query = { id, completed };
    toggleTodo(query);
  };

  const handleDelete = (id: string) => {
    deleteTodo(id);
  };

  return (
    <li className=" flex flex-col justify-between gap-2 border rounded-lg text-xs p-2 dark:bg-slate-900 dark:text-slate-300">
      <div className={`${completed ? 'line-through' : ''} flex flex-col gap-2`}>
        <p className="break-all">
          <span className="font-bold text-sm">Body :</span> {text}
        </p>
      </div>
      <div className=" flex justify-center items-center h-8  ">
        <button
          onClick={() => handleCompleted(id, !completed)}
          disabled={isLoadingUpdate}
          className={`${
            completed ? 'bg-teal-200' : 'bg-red-200'
          }  rounded-lg flex justify-center items-center w-full cursor-pointer dark:text-slate-900 flex-grow text-center h-full disabled:bg-transparent`}
        >
          {completed ? 'DONE' : 'IN PROGRESS'}
        </button>
        <button
          disabled={isLoadingDelete}
          onClick={() => handleDelete(id)}
          className=" h-full px-5 rounded-md bg-red-400 disabled:bg-transparent"
          type="button"
        >
          X
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
