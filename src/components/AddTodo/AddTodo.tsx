import { addTodo } from 'api/ApiTodo';
import { useTodosMutation } from 'Hooks/useTodosMutation';

const AddTodo = () => {
  const { mutate: newTodo, isError, isLoading } = useTodosMutation(addTodo);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toDo = e.currentTarget.text.value;
    newTodo({ text: toDo, completed: false });

    e.currentTarget.text.value = '';
  };

  return (
    <div className=" dark:text-slate-200 dark:bg-slate-500 dark:shadow-white p-5 lg:max-w-5xl xl:max-w-7xl rounded-2xl shadow-xl m-auto font-semibold bg-slate-100 text-slate-900 mt-10 h-52">
      <form
        className="h-full flex flex-col gap-2 md:gap-5"
        onSubmit={handleSubmit}
      >
        <input
          name="text"
          className="outline-none resize-none rounded-xl w-full h-3/4 p-3 caret-slate-600 dark:caret-yellow-500 dark:text-black"
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
