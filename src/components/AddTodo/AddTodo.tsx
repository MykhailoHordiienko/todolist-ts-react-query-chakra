import { addTodo } from 'api/ApiTodo';
import { useMutation, useQueryClient } from 'react-query';

type Props = {};

const AddTodo = (props: Props) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toDo = e.currentTarget.text.value;
    mutation.mutate({ text: toDo, completed: false });
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
          className="bg-teal-200 rounded-lg h-16 dark:bg-slate-900"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
