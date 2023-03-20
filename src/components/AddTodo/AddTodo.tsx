import { addTodo } from 'services/services';
import { useTodosMutation } from 'Hooks/useTodosMutation';
import { useState } from 'react';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const [errInput, setErrInput] = useState(false);
  const { mutate: newTodo, isError, isLoading } = useTodosMutation(addTodo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    setErrInput(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) {
      setErrInput(true);
      return;
    }
    setErrInput(false);

    const date = new Date();

    newTodo({ date, text: input, completed: false });

    setInput('');
  };

  return (
    <div className=" dark:text-slate-200 dark:bg-slate-500 p-5 lg:max-w-5xl xl:max-w-7xl rounded-2xl shadow-xl m-auto font-semibold bg-slate-100 text-slate-900 mt-10 h-52">
      <form
        className="h-full flex flex-col gap-2 md:gap-5"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          name="text"
          onChange={handleChange}
          value={input}
          placeholder={errInput ? 'Fill this field' : 'Write ToDo'}
          className={`${
            errInput ? 'bg-red-300 placeholder-white' : ''
          } outline-none resize-none rounded-xl w-full h-3/4 p-3 caret-slate-600 dark:caret-yellow-500 dark:text-black text-center focus:placeholder-transparent`}
        />
        <button
          type="submit"
          disabled={isLoading || isError}
          className="bg-teal-200 rounded-lg h-16 dark:bg-slate-900 disabled:text-transparent disabled:bg-teal-200/40"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
