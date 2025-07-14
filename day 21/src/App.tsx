import { useQuery } from "@tanstack/react-query";

const App = () => {
  const { data, isPending, refetch, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if(error){
    alert('Something went wrong!!!')
  }

  return (
    <div className="w-full min-h-dvh flex justify-center items-center p-5 bg-slate-400 text-white">
      <div className="flex flex-col gap-5 items-center">
      <div className="">
        {isPending ? <div>Loading...</div> : JSON.stringify(data.slice(0, 10))}
      </div>
      <button className="px-5 py-3 text-white bg-slate-500 rounded-lg w-[200px] cursor-pointer" onClick={()=>refetch()}>Refetch Data</button>
      </div>
    </div>
  );
};

const getTodos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await response.json();
};

export default App;
