import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));
  const { id } = useParams();

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = () => {
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  };

  const handleLike = () => {
    axios.post(`http://localhost:8000/api/posts/${id}/like/`, {}, {
      headers: { Authorization: `Token ${token}` }
    })
      .then(() => fetchPost())
      .catch(error => console.error('Error liking post:', error));
  };

  const handleComment = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8000/api/posts/${id}/comments/`, { text: comment }, {
      headers: { Authorization: `Token ${token}` }
    })
      .then(() => {
        setComment('');
        fetchPost();
      })
      .catch(error => console.error('Error posting comment:', error));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>By {post.author} on {new Date(post.published_date).toLocaleDateString()}</p>
      <p>{post.content}</p>
      <p>Likes: {post.likes_count} <button onClick={handleLike}>Like</button></p>
      <h2>Comments</h2>
      {post.comments.map(comment => (
        <div key={comment.id}>
          <p>{comment.text}</p>
          <p>By {comment.author} on {new Date(comment.created_date).toLocaleDateString()}</p>
        </div>
      ))}
      <form onSubmit={handleComment}>
        <textarea value={comment} onChange={e => setComment(e.target.value)} required />
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}

export default PostDetail;