(function () {
  'use strict';

  var MoviesModel = require('../models');

  module.exports = {
    saveMovies: function (movieData, cb) {
      var newMovie = new MoviesModel(movieData);

      newMovie.save(function (error, savedData) {
       cb(error, savedData);
      })
    },

    searchMovie: function (query, cb) {
      var keyWord = query.q;
      var searchQuery = keyWord ? {$or: [{title: keyWord}, {director: keyWord}, {year: parseInt(keyWord)}]} : {}
      MoviesModel.find(searchQuery)
        .limit(query.limit || 10)
        .skip(query.skip || 0)
        .sort(query.sort || '-year')
        .exec(function (error, searchResult) {
          cb(error, searchResult);
        });
    },

    deleteMovies: function (id, cb) {
      MoviesModel.remove({_id: id}, function (error, result) {
        cb(error, result);
      });
    },

    updateMovies: function (id, newData, cb) {
      MoviesModel.update({_id: id}, newData, function (error, result) {
        cb(error, result);
      });
    }
  }
}());