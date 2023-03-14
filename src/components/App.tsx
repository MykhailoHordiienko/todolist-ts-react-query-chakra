import Header from './Header/Header';

export const App = () => {
  const root = document.querySelector('#root');
  root?.classList.add('dark');
  return (
    <div className="dark:bg-slate-700 h-screen">
      <Header />
    </div>
  );
};
