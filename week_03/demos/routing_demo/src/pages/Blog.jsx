import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes/routes';

export default function Blog() {
const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/posts")
        .then(response => response.json())
        .then((data) => {
            if (data.posts && Array.isArray(data.posts)) {
                console.log("data.posts:", data.posts);
                setPosts(data.posts);
            } else {
                console.error("response is not in valid data (we want an array)", data);
            }
        })
        .catch((error) => console.error("fetching error:", error));
    }, []);
  return (
    <div>
        <h1>Blog</h1>
        <ul>
            {posts.map((post, id) => (
                <li key={`post-${post.id}`}>
                    <Link to={`${ROUTES.blog.path}/${post.id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
