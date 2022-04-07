const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/instapost';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once('connected', function() {
  console.log('Mongodb connected...');
});

module.exports = db;
