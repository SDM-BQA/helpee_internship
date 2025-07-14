import { queryOptions } from "@tanstack/react-query";

interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function createTodosQueryOptions() {
  return queryOptions({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
}

const getTodos = async (): Promise<Todos[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/comments?postId=${id}`
  //   );
  return await response.json();
};
