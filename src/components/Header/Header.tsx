import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex dark:text-white dark:bg-slate-900 dark:shadow-white items-center justify-between p-5 md:p-10 lg:max-w-5xl xl:max-w-7xl border-b-2 border-slate-100 rounded-b-2xl shadow-lg m-auto font-bold h-20 bg-slate-300">
      <MoonIcon className="w-8 cursor-pointer animate-pulse" />
      <h1>Header</h1>
      <SunIcon className="w-8 cursor-pointer animate-pulse" />
    </header>
  );
};

export default Header;
