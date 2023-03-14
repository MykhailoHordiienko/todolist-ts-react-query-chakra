import { useEffect, useState } from 'react';
import AddTodo from './AddTodo/AddTodo';

import Header from './Header/Header';

export const App = () => {
  const [toggleDarkMod, setToggleDarkMod] = useState(false);

  const handleDayMod = () => {
    const divRoot = document.querySelector('#root');
    const classValue = divRoot?.classList;
    if (classValue) {
      classValue.toggle('dark');
    }
  };

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setToggleDarkMod(true);
    }
    if (toggleDarkMod) {
      handleDayMod();
    }
  }, [toggleDarkMod]);

  return (
    <div className="dark:bg-slate-700 bg-zinc-100 h-screen transition-all duration-1000 px-4">
      <Header handleDayMod={handleDayMod} />
      <main className="h-full">
        <AddTodo />
      </main>
    </div>
  );
};
