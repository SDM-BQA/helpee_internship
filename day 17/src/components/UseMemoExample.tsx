import { useMemo, useState } from "react";

import { initialItems } from "./utils";

// interface DemoProps {}
interface Item {
  id: number;
  isSelected: boolean;
}

function UseMemoExample() {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item: Item) => item.isSelected),
    [items]
  );

  return (
    <div className="tutorial flex flex-col gap-5">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button
        className="p-5 bg-blue-500 rounded-lg text-white cursor-pointer"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
}

export default UseMemoExample;
