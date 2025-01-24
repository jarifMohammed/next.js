import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../../app/globals.css'
export default function BlogDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPost(response.data);
      };
      fetchPost();
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="container">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
