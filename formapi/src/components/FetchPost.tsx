import React, { useState } from "react";
import axios from "axios";

interface FetchPostProps {
  setPost: React.Dispatch<React.SetStateAction<{ id: number; title: string; body: string } | null>>;
}

const FetchPost: React.FC<FetchPostProps> = ({ setPost }) => {
  const [postId, setPostId] = useState("");

  const fetchPost = async () => {
    if (!postId) {
      alert("Enter a Post ID to fetch.");
      return;
    }

    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching post:", error);
      alert("Post not found!");
    }
  };

  return (
    <div className="fetch-section">
      <input type="number" placeholder="Enter Post ID" value={postId} onChange={(e) => setPostId(e.target.value)} />
      <button onClick={fetchPost}>Get Post</button>
    </div>
  );
};

export default FetchPost;
