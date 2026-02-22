import { useQuery, useQueryClient } from "@tanstack/react-query";

export default function PostsComponent() {
  const QueryClient = useQueryClient();

  const {
    data: posts,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts?_limit=5").then((res) =>
        res.json(),
      ),
  });

  if (isLoading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;

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
