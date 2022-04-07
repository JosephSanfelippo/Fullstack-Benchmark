import React from 'react';
import moment from 'moment';

const Post = (props) => {

  return (
    <div className='post'>
      <div className='post__byline'>
        <div className='center'>
          <img
            className='avatar'
            src='https://www.w3schools.com/w3images/avatar6.png'
            alt='user avatar'
          />
          <span className='post__byline__user'>{props.posts.username}</span>
        </div>
        {moment(props.posts.createdAt, 'YYYYMMDD').fromNow()}
      </div>
      <div className='post__image'>
        <img src={props.posts.imageUrl} />
      </div>
      <p>
        {props.posts.body}
      </p>
      <div className='post__actions'>
        <div className='post__likes'>Likes: {props.posts.likes} </div>
        <div className='post__buttons'>
          <button>Like</button>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Post;
