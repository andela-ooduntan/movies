(function () {
  var Movies = require('../service');

  module.exports = {
    addMovies: function (req, res) {
      var movieData = req.body;

      Movies.saveMovies(movieData, function (error, savedMovies) {
        if(!error) {
          return res.send({
            newMovie: savedMovies
          });
        }

        return res.send({error: error})
      });
    },

    searchMovies: function (req, res) {
      var searchParams = req.query;

      Movies.searchMovie(searchParams, function (error, searchResult) {
        if(!error) {
          return res.send({
            search: searchResult
          });
        }

        return res.send({error: error})
      });
    },

    removeMovies: function (req, res) {
      var movieId = req.params.id

      Movies.deleteMovies(movieId, function (error, deleteResult) {
        if(!error) {
          return res.send({
            delete: deleteResult
          });
        }

        return res.send({error: error})
      });
    },

    updateMovies: function (req, res) {
      var movieId = req.params.id
      var newMovieData = req.body;

      Movies.updateMovies(movieId, newMovieData, function (error, updatedMovie) {
        if(!error) {
          return res.send({
            update: updatedMovie
          });
        }

        return res.send({error: error})
      });
    }

  }

}());