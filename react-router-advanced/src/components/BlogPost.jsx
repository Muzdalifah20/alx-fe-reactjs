import { useParams, Link } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams();

  return (
    <div>
      <Link to="/">← Home</Link>
      <h1>#{id} Blog Post</h1>
      <p>This is blog post content number {id}</p>
    </div>
  );
}
