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

// View for one blog
var BlogView = Backbone.View.extend({
  model: new Blog(),
  tagName: 'tr',
  initialize: function() {
    this.template = _.template($('.blogs-list-template').html());
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  }
});

// View for all blog
var BlogsView = Backbone.View.extend({

});
