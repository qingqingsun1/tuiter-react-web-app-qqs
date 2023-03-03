import React from "react";
import postsArray from './post.json';
import PostItem from "./post-item";

const PostList = () => {
  return(
      <ul>
        {
          postsArray.map(post =>
              <PostItem
                  key={post._id}
                  post={post}/> )
        }
      </ul>
  );
};

export default PostList;