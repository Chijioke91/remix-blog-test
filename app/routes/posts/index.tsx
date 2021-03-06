import { Link, useLoaderData } from 'remix';
import { getPosts, Post } from '../../post';

export const loader = () => {
  return getPosts();
};

export default function index() {
  const posts = useLoaderData<Post[]>();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
