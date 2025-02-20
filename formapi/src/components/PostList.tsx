import React from "react";

interface PostListProps {
  post: { id: number; title: string; body: string };
}

const PostList: React.FC<PostListProps> = ({ post }) => {
  return (
    <div className="post-item">
      <strong>ID:</strong> {post.id} <br />
      <strong>Title:</strong> {post.title} <br />
      <strong>Body:</strong> {post.body}
    </div>
  );
};

export default PostList;
