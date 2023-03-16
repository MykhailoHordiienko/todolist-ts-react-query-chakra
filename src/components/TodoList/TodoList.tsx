import TodoItem from 'components/TodoItem/TodoItem';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoadingSkeleton from '../LoadingSceleton/LoadingSkeleton';

import { useQuery } from 'react-query';
import { getTodos } from 'api/ApiTodo';
import { Todo } from 'types';

const TodoList = () => {
  const { isLoading, isError, data } = useQuery<Todo[]>('todos', getTodos);
  if (isError) {
    return <ErrorPage />;
  }
  return (
    <div className=" dark:text-slate-200 dark:bg-slate-500 dark:shadow-white p-5 lg:max-w-5xl xl:max-w-7xl rounded-2xl shadow-xl m-auto font-semibold bg-slate-100 text-slate-900 mt-10 h-[350px] md:h-[550px] overflow-y-scroll scrollbar-none">
      {isLoading || data === undefined ? (
        <LoadingSkeleton />
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
          {data.map(({ id, completed, text }) => (
            <TodoItem key={id} completed={completed} text={text} id={id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
