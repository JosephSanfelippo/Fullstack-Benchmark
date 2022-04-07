import React from 'react';
import moment from 'moment';

const maxChar = 145;

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: props.posts.body,
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.showChars = this.showChars.bind(this);
    this.paraSplitter = this.paraSplitter.bind(this);
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  showChars() {

    if (this.state.isOpen) {
      return this.props.posts.body;
    }
    return this.state.body.slice(0, maxChar) + '...';
  }


  paraSplitter () {
    var postBody = this.showChars();
    var splitBody = postBody.split('\n');
    console.log('sb', splitBody);
    return splitBody;
  }

  render() {

    return (
      <div className='post'>
        <div className='post__byline'>
          <div className='center'>
            <img
              className='avatar'
              src='https://www.w3schools.com/w3images/avatar6.png'
              alt='user avatar'
            />
            <span className='post__byline__user'>{this.props.posts.username}</span>
          </div>
          {moment(this.props.posts.createdAt, 'YYYYMMDD').fromNow()}
        </div>
        <div className='post__image'>
          <img src={this.props.posts.imageUrl} />
        </div>
        {this.paraSplitter().map(par => {
          return (
            <p>
              {par}
            </p>
          );
        })}
        <div className="button">
          <button onClick={this.toggle}>
            {this.state.isOpen ? 'Show Less' : 'Show More'}
          </button>
        </div>
        <div className='post__actions'>
          <div className='post__likes'>Likes: {this.props.posts.likes} </div>
          <div className='post__buttons'>
            <button>Like</button>
            <button>Comment</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
