import { useReducer } from "react";

interface State {
  count: number;
  error: string | null;
}

interface Action {
  type: "increment" | "decrement";
}

const reducer = (state: State, action: Action) => {
  const { type } = action;

  switch (type) {
    case "increment": {
      const newCount = state.count + 1;
      const hasError = newCount > 5;

      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Maximum Reached" : null,
      };
    }
    case "decrement": {
      const newCount = state.count - 1;
      const hasError = newCount < 0;

      return {
        ...state,
        count: hasError ? state.count : newCount,
        error: hasError ? "Minimum Reached" : null,
      };
    }
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

  return (
    <div className="transition-all duration-100">
      <div className="text-center text-[3rem] mb-6">Count: {state.count}</div>
      {state.error && <div className="mb-2 text-center text-red-500">{state.error}</div>}
      <div className="flex gap-3 mt-5">
        <button
          className="transition-all duration-100 mb-2 bg-blue-500 p-5 text-white rounded-xl cursor-pointer active:scale-[.9]"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="transition-all duration-100 mb-2 bg-blue-500 p-5 text-white rounded-xl cursor-pointer active:scale-[.9]"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;
