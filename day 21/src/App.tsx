import { useMutation, useQuery } from "@tanstack/react-query";

interface Post {
  userId: number
  id: number;
  title: string;
  body: string;
}

const App = () => {
  const {
    data: posts,
    error: queryError,
    isPending: isQueryPending,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async (): Promise<Post[]> => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    },
  });

  const {
    mutate: addPost,
    isPending: isMutationPending,
    error: mutationError,
  } = useMutation({
    mutationFn: async (newPost: Post) => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(newPost),
      });
      if (!response.ok) throw new Error("Failed to add post");
      return response.json();
    },
    onSuccess: () => {
      refetch(); // Optionally refetch posts list
    },
  });

  const handleAddPost = () => {
    addPost({
      userId: 56666,
      id: 5266,
      title: "hello this is the userGenerated Post",
      body: "hello this is the userGenerated Post body",
    });
  };

  return (
    <div className="w-full min-h-dvh flex justify-center items-center p-5 bg-slate-400 text-white">
      <div className="flex flex-col gap-5 items-center">
        {isQueryPending || isMutationPending ? (
          <div>Loading...</div>
        ) : queryError || mutationError ? (
          <div>Error: {queryError?.message || mutationError?.message}</div>
        ) : (
          <>
            <div className="bg-slate-600 p-4 rounded min-h-[400px] overflow-y-auto w-[950px]">
              {posts?.slice(0, 10).map((post) => (
                <div key={post.id} className="border-b border-slate-300 pb-2">
                  <p>ID: {post.id}</p>
                  <p>Title: {post.title}</p>
                  <p>Body: {post.body}</p>
                </div>
              ))}
            </div>
            <button
              onClick={handleAddPost}
              className="px-5 py-3 text-white bg-slate-500 rounded-lg w-[200px] cursor-pointer"
            >
              Add Post
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
