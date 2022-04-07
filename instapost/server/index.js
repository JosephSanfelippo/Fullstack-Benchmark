const express = require('express');

const Post = require('../database/Post.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/../client/dist'));

const getAllPosts = function() {
  return Post.find();
};


app.get('/api/posts', function(req, res) {
  getAllPosts()
    .then(data => {
      console.log('server GET success!');
      res.send(data);
    })
    .catch(err => {
      console.log('server GET fail!', err);
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
