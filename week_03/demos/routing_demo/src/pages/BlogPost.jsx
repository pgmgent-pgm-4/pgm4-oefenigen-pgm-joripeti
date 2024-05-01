import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogPost() {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${postId}`) 
            .then(response => response.json())
            .then((data) => {
                console.log("data:", data);
                setPost(data);
            });
    }, [postId]);
    return (
        <div>
        { post &&
            <>
            <h2>{post.title}</h2>
            {/* <ul>
                {post.tags && post.tags.map ((tag, i) => (
                    console.log("tag:", tag),
                    <li key={`tag-${i}`}>
                        {tag}
                    </li>
                ))}
            </ul> */}
            <span>{post.tags?.join(" - ")}</span>
            <p>{post.body}</p>
            </>
        }
        </div>
    )
}
