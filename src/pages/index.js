import Link from 'next/link';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import '../app/globals.css'
export default function Home() {
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    
    <div className="container">
        <Header></Header>
      <h1 className="text-4xl  font-bold">Blog Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} className="mt-2">
            <Link className="text-blue-500" href={`/blog/${post.id}`}>
               {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
