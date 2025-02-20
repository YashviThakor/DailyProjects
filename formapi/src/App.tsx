import React, { useState } from "react";
import "./App.css";
import PostForm from "./components/PostForm";
import FetchPost from "./components/FetchPost";
import PostList from "./components/PostList";

const App: React.FC = () => {
  const [post, setPost] = useState<{ id: number; title: string; body: string } | null>(null);

  return (
    <div className="container">
      <h2>Submit a Post</h2>
      <PostForm />

      <h2>Fetch Post by ID</h2>
      <FetchPost setPost={setPost} />

      {post && <PostList post={post} />}
    </div>
  );
};

export default App;
