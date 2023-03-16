import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

type Props = {
  handleDarkMod: () => void;
  handleWhiteMod: () => void;
};

const Header = ({ handleDarkMod, handleWhiteMod }: Props) => {
  return (
    <header className="flex dark:text-slate-300 dark:bg-slate-900 items-center justify-between p-5 md:p-10 lg:max-w-5xl xl:max-w-7xl rounded-b-2xl shadow-xl m-auto font-bold h-20 bg-slate-100 text-slate-900">
      <MoonIcon
        onClick={handleDarkMod}
        className="w-8 cursor-pointer animate-pulse text-gray-600"
      />
      <h1 className="tracking-[5px] md:text-2xl md:tracking-[10px]">
        To Do APP
      </h1>
      <SunIcon
        onClick={handleWhiteMod}
        className="w-8 cursor-pointer animate-[spin_5s_linear_infinite] text-yellow-400"
      />
    </header>
  );
};

export default Header;
