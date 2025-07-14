// import { useInfiniteQuery } from "@tanstack/react-query";
// import { useEffect } from "react";
// import { useInView } from "react-intersection-observer";

import PaginatedComponent from "./components/PaginatedComponent";

// const fetchTodos = async ({ pageParam = 1 }: { pageParam: number }) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/todos?_limit=10&_page=${pageParam}`
//   );
//   if (!response.ok) throw new Error("Network response was not ok");
//   return response.json();
// };

// const App = () => {
//   const { ref, inView } = useInView();

//   const {
//     data: todos,
//     status,
//     error,
//     fetchNextPage,
//     isFetchingNextPage,
//     hasNextPage,
//   } = useInfiniteQuery({
//     queryKey: ["todos"],
//     queryFn: fetchTodos,
//     initialPageParam: 1,
//     getNextPageParam: (lastPage, allPages) => {
//       // return allPages.length + 1;
//       const nextPage = lastPage.length ? allPages.length + 1 : undefined;
//       return nextPage;
//     },
//   });

// useEffect(() => {
//   if (inView && hasNextPage && !isFetchingNextPage) {
//     fetchNextPage();
//   }
// }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

//   return (
//     <div className="w-full min-h-dvh flex justify-center items-center p-5 bg-slate-400 text-white">
//       <div className="flex flex-col gap-5 items-center">
//         {/* {status && <div className="text-3xl">Loading...</div>} */}
//         {error && <div className="">{error.message}</div>}

//         {todos?.pages.map((page, pageIndex) => (
//           <div className="flex flex-col gap-5" key={pageIndex}>
//             {page.map((todo) => (
//               <div
//                 key={todo.id}
//                 className="w-[600px] bg-slate-500 p-5 text-3xl"
//               >
//                 <p>{todo.title}</p>
//               </div>
//             ))}
//           </div>
//         ))}
//         <button
//         ref={ref}
//           className="mb-5 px-5 py-3 bg-blue-600 rounded font-bold text-white cursor-pointer"
//           onClick={() => fetchNextPage()}
//           disabled={!hasNextPage || isFetchingNextPage}
//         >
//           {isFetchingNextPage ? "Loading More..." : "Load More"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;


const App = () => {
  return (
    <div className="w-full min-h-dvh flex justify-center items-center p-5 bg-slate-400 text-white">
      <PaginatedComponent/>
    </div>
  );
};

export default App;
