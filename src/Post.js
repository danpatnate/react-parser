import React from 'react';

const Post = ({ id, content, date, link, title }) => {
  return (
    <div className={"parser__posts"}>
      <h2 className={"parser__title"}>{title}</h2>
      <div className={"parser__date"}>{date}</div>
      <div className={"parser__link"}><a href={link}>{link}</a></div>
      <div className={"parser__content"} dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  )
}

export default Post;
