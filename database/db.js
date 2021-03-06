var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var options = {server: {socketOptions: {keepAlive: 300000, connectTimeoutMS: 30000 }},
                replset: {socketOptions: {keepAlive: 300000, connectTimeoutMS : 30000 }}};

var MONGODB_URI = 'mongodb://heroku_z6nww726:1bfm6s8d9k9q7f52h1erqlmo3i@ds143181.mlab.com:43181/heroku_z6nww726';
mongoose.connect(MONGODB_URI, options);

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('connected to database');
});

module.exports = db;

// 'mongodb://localhost:27017/NoteExtension'
// 'mongodb://heroku_z6nww726:1bfm6s8d9k9q7f52h1erqlmo3i@ds143181.mlab.com:43181/heroku_z6nww726