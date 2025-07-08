import { useRef, useState } from "react";

// interface DemoProps {}

function UseRefExample() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleClick = () => {
    setCount(count + 1);
    countRef.current++;

    console.log("Count: ", count);
    console.log("Ref: ", countRef.current);
    
  };

  return (
    <div className="tutorial flex flex-col gap-5">
      <h1 className="text-[4rem] text-center">Count: {count}</h1>
      <button
        className="p-5 bg-blue-500 rounded-lg text-white cursor-pointer"
        onClick={handleClick}
      >
        Increment
      </button>
    </div>
  );
}

export default UseRefExample;
