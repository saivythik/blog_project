import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = (url = 'http://localhost:8000/api/posts/') => {
    axios.get(url)
      .then(response => {
        setPosts(prevPosts => [...prevPosts, ...response.data.results]);
        setNextPage(response.data.next);
      })
      .catch(error => console.error('Error fetching posts:', error));
  };

  const loadMore = () => {
    if (nextPage) {
      fetchPosts(nextPage);
    }
  };

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
          <p>By {post.author} on {new Date(post.published_date).toLocaleDateString()}</p>
          <p>Likes: {post.likes_count}</p>
        </div>
      ))}
      {nextPage && <button onClick={loadMore}>Load More</button>}
    </div>
  );
}

export default PostList;