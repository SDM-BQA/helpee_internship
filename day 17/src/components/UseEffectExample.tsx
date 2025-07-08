import { useState, useEffect } from "react";

interface DemoProps{
    name: string
}

const UseEffectExample = ({name}:DemoProps) => {

    //  useState
    const [count, setCount] = useState(0)

    // useEffect
    useEffect(()=>{
        console.log(count);

        // optional
        return()=>{
            console.log("Cleaning The Hook");
        }
        
    },[count])

  return <div className="flex flex-col gap-2">
    <div className="">Hello, {name}</div>
    <div className="flex items-center justify-between gap-5">
        <div className="px-3 py-2 bg-green-500 text-white font-semibold rounded rounded-lg cursor-pointer" onClick={()=>setCount(count + 1)}>Increment</div>
        <div className="span-2 text-3xl">{count}</div>
        <div className="px-3 py-2 bg-red-500 text-white font-semibold rounded rounded-lg cursor-pointer" onClick={()=>setCount(count - 1)}>Decrement</div>
    </div>

  </div>;
};

export default UseEffectExample;
