import { getTodos } from 'api/ApiTodo';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AddTodo from './AddTodo/AddTodo';
import ErrorPage from './ErrorPage/ErrorPage';
import Header from './Header/Header';
import LoadingSkeleton from './LoadingSceleton/LoadingSkeleton';
import TodoList from './TodoList/TodoList';

export const App = () => {
  const [toggleDarkMod, setToggleDarkMod] = useState(false);

  const handleDayMod = () => {
    const divRoot = document.querySelector('#root');
    const classValue = divRoot?.classList;
    if (classValue) {
      classValue.toggle('dark');
    }
  };

  const { isLoading, isError, data } = useQuery('todos', getTodos);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setToggleDarkMod(true);
    }
    if (toggleDarkMod) {
      handleDayMod();
    }
  }, [toggleDarkMod]);

  if (isError) {
    return <ErrorPage />;
  }

  return (
    <div className="dark:bg-slate-700 bg-zinc-100 h-screen transition-all duration-1000 px-4">
      <Header handleDayMod={handleDayMod} />
      {isLoading || data === undefined ? (
        <LoadingSkeleton />
      ) : (
        <main className="h-auto">
          <AddTodo />
          <TodoList toDos={data} />
        </main>
      )}
    </div>
  );
};
