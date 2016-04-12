var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blogroll-tutorial');

var Schema = mongoose.Schema;

var BlogSchema = new Schema({
  author: String,
  title: String,
  url: String
});

mongoose.model('Blog', BlogSchema);
var Blog = mongoose.model('Blog');

// Creates a blog every time the server is run - for testing
// var blog = new Blog({
//   author: "test",
//   title: "test title",
//   url: "http://test.com"
// })
// blog.save();

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// Routes
// GET blog
app.get('/api/blogs', function(request, response) {
  Blog.find(function(error, docs) {
    docs.forEach(function(item) {
      console.log('Received a GET request for _id:' + item.id)
    });
    response.send(docs);
  });
});

// POST blog
app.post('/api/blogs', function(request, response) {
  var blog = new Blog(request.body);
  console.log('Received a POST request');
  for (var key in request.body) {
    console.log(key + ': ' + request.body[key])
  };
  blog.save(function(error, doc) {
    response.send(doc);
  });
});

// DELETE blog
app.delete('/api/blogs/:id', function(request, response) {
  console.log('Received a DELETE request for _id: ' + request.params.id);
  Blog.remove({_id: request.params.id}, function(err) {
      response.send({_id: request.params.id});
    });
});

var port = 3000;
app.listen(port);
console.log('server on ' + port);
