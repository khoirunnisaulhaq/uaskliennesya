import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPosts } from '../api/posts';

const DataAPI = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector(state => state.user);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  return (
    <div className="text-center p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-2">Posts by {user.name}</h1>
      <ul className="list-disc list-inside">
        {posts.map(post => (
          <li key={post.id}>
            <h3 className="text-lg font-bold">{post.title}</h3>
            <p className="mt-2">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataAPI;
