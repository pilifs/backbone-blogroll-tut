// Model

var Blog = Backbone.Model.extend ({
  defaults: {
    author: '',
    title: '',
    url: ''
  }
});

// Collections

var Blogs = Backbone.Collection.extend({});

// instantiate 2 blogs

var blog1 = new Blog({
  author: "Filip",
  title: "Filip testing 1",
  url: "http://test1.com"
});

var blog2 = new Blog({
  author: "Filip",
  title: "Filip testing 2",
  url: "http://test2.com"
});

// instantiate a Collection

var blogs = new Blogs([blog1, blog2]);
