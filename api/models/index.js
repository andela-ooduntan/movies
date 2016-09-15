(function () {
  'use strict';

  var mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/moviesApp', function () {
    console.log('Connected to the Db');
  });

  var moveiesCollection = mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    director: String,
    year: Number
  });

  module.exports = mongoose.model('movies', moveiesCollection);
}());