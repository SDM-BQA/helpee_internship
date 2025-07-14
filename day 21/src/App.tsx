// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";

import { useQueries, useQuery, useSuspenseQuery } from "@tanstack/react-query";
import createTodosQueryOptions from "./queryOptions/createTodosQueryOptions";

// const App = () => {
//   const [on, setOn] = useState(true);
//   const [id, setId] = useState(1);
//   const { data, isPending, refetch, error } = useQuery({
//     queryKey: ["todos", id],
//     queryFn: () => getTodos(id),
//     enabled: on,
//   });

//   if (error) {
//     alert("Something went wrong!!!");
//   }

//   return (
//     <div className="w-full min-h-dvh flex justify-center items-center p-5 bg-slate-400 text-white">
//       <div className="flex flex-col gap-5 items-center">
//         <div className="">
//           {isPending ? (
//             <div>Loading...</div>
//           ) : (
//             JSON.stringify(data?.slice(0, 10))
//           )}
//         </div>
//         {/* <button className="px-5 py-3 text-white bg-slate-500 rounded-lg w-[200px] cursor-pointer" onClick={()=>refetch()}>Refetch Data</button> */}
//         <button
//           className="px-5 py-3 text-white bg-slate-500 rounded-lg w-[200px] cursor-pointer"
//           onClick={() => setId((prev) => prev + 1)}
//         >
//           Increase ID
//         </button>
//       </div>
//     </div>
//   );
// };

// const getTodos = async (id: number) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   // const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/comments?postId=${id}`
//   );
//   return await response.json();
// };

// export default App;

const App = () => {
  // const { data, isPending, refetch, isFetching } = useQuery(
  //   createTodosQueryOptions()
  const { data, isPending, refetch, isFetching } = useSuspenseQuery(
    createTodosQueryOptions()
  );

  // const [res1, res2, res3] = useQueries({
  //   queries:[
  //     createTodosQueryOptions(),
  //     something(), 
  //     anotherSomething()
  //   ]
  // })

  return (
    <div className="w-full min-h-dvh flex justify-center items-center p-5 bg-slate-400 text-white">
      <div className="flex flex-col gap-5 items-center">
        {isFetching && <div>Fetching...</div>}
        <div className="">
          {isPending ? (
            <div>Loading...</div>
          ) : (
            // JSON.stringify(data?.slice(0, 10))
            JSON.stringify(data[0]?.completed)
          )}
        </div>
        <button
          className="px-5 py-3 text-white bg-slate-500 rounded-lg w-[200px] cursor-pointer"
          onClick={() => refetch()}
        >
          Refetch Data
        </button>
      </div>
    </div>
  );
};

export default App;
