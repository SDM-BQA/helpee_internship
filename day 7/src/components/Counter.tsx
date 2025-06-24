import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import {
  decrementounter,
  incrementCounter,
} from "../features/counter/counterSlice";

const Counter = () => {
  const state = useSelector((root: RootState) => root.counter);
  const { counter } = state;
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementCounter());
  };
  const decrement = () => {
    dispatch(decrementounter());
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </>
  );
};

export default Counter;
