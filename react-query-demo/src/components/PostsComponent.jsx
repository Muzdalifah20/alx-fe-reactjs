import { useQuery } from "@tanstack/react-query";

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then(
    (res) => res.json(),
  );
}
export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 5 * 60 * 1000,
    staleTime: 1 * 60 * 1000,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Posts (React Query)</h1>
      <div>
        <button onClick={() => refetch()}>Refresh Posts</button>
      </div>

      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <span>User ID: {post.userId}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
