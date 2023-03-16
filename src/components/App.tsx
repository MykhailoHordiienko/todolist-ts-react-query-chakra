import { handleDarkMod, handleWhiteMod } from 'Healpers/darkWhiteMod';
import { Toaster } from 'react-hot-toast';

import { useEffect, useState } from 'react';
import AddTodo from './AddTodo/AddTodo';
import Header from './Header/Header';
import TodoList from './TodoList/TodoList';

export const App = () => {
  const [toggleDarkMod, setToggleDarkMod] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setToggleDarkMod(true);
    }
    switch (toggleDarkMod) {
      case true:
        handleDarkMod();
        break;
      case false:
        handleWhiteMod();
        break;

      default:
        break;
    }
  }, [toggleDarkMod]);

  return (
    <div className="dark:bg-slate-700 bg-zinc-100 h-screen transition-all duration-1000 px-4">
      <Toaster position="top-right" reverseOrder={false} />

      <Header handleDarkMod={handleDarkMod} handleWhiteMod={handleWhiteMod} />

      <main className="h-auto">
        <AddTodo />
        <TodoList />
      </main>
    </div>
  );
};
