import React from 'react';

import Post from './Post.jsx';

const Feed = (props) => {

  const allPosts = props.posts;
  console.log('ap', allPosts);

  allPosts.sort((firstPost, secondPost) => {

    return new Date(secondPost.createdAt) - new Date(firstPost.createdAt);
  });

  return (
    <div className='feed'>
      {/* section for post form */}

      {/* section for all posts */}
      {allPosts.map((post, index) =>
        <Post key={index}
          posts={post}/>
      )}
    </div>
  );
};

export default Feed;
