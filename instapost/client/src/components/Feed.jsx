import React from 'react';

import Post from './Post.jsx';

const Feed = (props) => {

  const allPosts = props.posts;

  allPosts.sort((firstPost, secondPost) => {

    return new Date(secondPost.createdAt) - new Date(firstPost.createdAt);
  });

  return (
    <div className='feed'>
      {allPosts.map((post, index) =>
        <Post key={index}
          posts={post}/>
      )}
    </div>
  );
};

export default Feed;
