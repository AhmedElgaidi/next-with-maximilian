// here we are just using the traditional react data fetching way

import { useEffect, useState } from "react";

export default function CSDF() {
  const [post, setPost] = useState({
    id: 0,
    title: "",
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/5")
      .then((response) => response.json())
      .then((post) => setPost(post));

  }, []);

  return (
    <>
      <h1>Client Side Data Fetching:</h1>
      <p>Post ID: {post.id}</p>
      <p>Post Body: {post.title}</p>
    </>
  );
}
