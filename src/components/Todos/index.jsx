import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addToDo,
  removeToDo,
  fetchTodos,
} from "../../features/Todos/todosSlice";
import Loader from "../common/Loader";
const Todos = () => {
  const [text, setText] = useState("");
  const { status, error, todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToDo(text));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (status === "failed") {
    return (
      <p className="flex justify-center mt-20 text-4xl font-semibold text-red-600">
        {error || "Something went wrong!"}
      </p>
    );
  }

  return (
    <div className="px-10 md:px-20">
      {status === "loading" && (
        <p className="flex justify-center mt-20 text-4xl font-semibold text-green-600">
          <Loader size={300} />
        </p>
      )}

      {status !== "loading" && (
        <>
          <h1 className="flex justify-center mt-20 text-4xl font-semibold mb-8">
            Todo
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row w-full items-center gap-4 mb-6"
          >
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className="px-5 py-2 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Add
            </button>
          </form>
        </>
      )}

      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex  items-center justify-between p-4 mb-2 bg-gray-700 shadow rounded-lg"
        >
          <span>{todo.title}</span>
          <button
            onClick={() => dispatch(removeToDo(todo.id))}
            className="px-3 py-1 cursor-pointer bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};
export default Todos;
