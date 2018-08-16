import React from 'react';

const Posts = ({ children, ...props }) => (
  <div className={"parser__posts"}>
    {props.posts}
  </div>
)

export default Posts;
