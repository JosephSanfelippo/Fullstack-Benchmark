import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import Feed from './components/Feed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log('index.jsx MOUNT success!');
    this.getPosts();
  }

  getPosts() {
    axios.get('/api/posts')
      .then(data => {
        console.log('client GET success!');
        let posts = data.data;
        this.setState({posts});
      })
      .catch(err => {
        console.log('client GET failed!', err);
      });
  }


  render() {
    return (
      <div>
        <div className="nav">
          <span className="nav__logo" >
            Instapost
          </span>
        </div>

        <div className="main">
          <Feed posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
