import { useEffect } from "react";
import type { RootState } from "../app/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./features/todoSlice";

const App = () => {
  const dispatch = useDispatch();
  const { data: todos, loading } = useSelector(
    (state: RootState) => state.todo
  );

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);
  return (
    <div className="p-10">
      {loading && <h1>Loading....</h1>}
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white rounded-xl shadow-md p-4 mb-4 border flex justify-between items-start"
        >
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {todo.title}
            </h2>
            <p className="text-sm text-gray-500">User ID: {todo.userId}</p>
            <p className="text-sm text-gray-500">Todo ID: {todo.id}</p>
          </div>
          <div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                todo.status
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
