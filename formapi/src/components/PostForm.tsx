import React, { useState } from "react";
import axios from "axios";

const PostForm: React.FC = () => {
  const [postId, setPostId] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!postId || !title || !body) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await axios.post("https://jsonplaceholder.typicode.com/posts", { id: Number(postId), title, body });
      alert("Post submitted (not stored permanently).");
    } catch (error) {
      console.error("Error submitting post:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="number" placeholder="Post ID" value={postId} onChange={(e) => setPostId(e.target.value)} />
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <button type="submit">Submit Post</button>
    </form>
  );
};

export default PostForm;
