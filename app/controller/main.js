'use strict';
app.controller('MoviesCtrl', function(Movies, $scope) {
  $scope.loader = false;
  $scope.movieList = [];
  $scope.saveResult = '';
  $scope.deleting = false;
  $scope.editing = false;
  $scope.addMovie = function () {
    $scope.loader = true;
    var movieData = {
      title: $scope.title,
      director: $scope.director,
      year: $scope.year
    };

    Movies.save(movieData).$promise.then(function (result) {
      $scope.loader = false;
      $scope.saveResult = 'Added movie successfully';
      $scope.movieList.splice(0, 0, result.newMovie)
      console.log($scope.movieList);
    }).catch(function (error) {
      $scope.loader = false;
      $scope.saveResult = error;
    });
  }

  $scope.deleteMovie = function (index) {
    $scope.deleting = true;
    var movieId = $scope.movieList[index]._id
    Movies.delete({ id: movieId }, function (result) {
      $scope.movieList.splice(index, 1);
      $scope.deleting = false;

    })
  }

  $scope.editMovie = function (index) {
    var movieId = $scope.movieList[index]._id
    Movies.update({ id: movieId}, { title: 'Bad Boys II' }, function (result) {
      console.log(result);
    })
  }

  $scope.init = function () {
    Movies.get('/movies', function (result) {
      $scope.movieList = result.search;
    });
  }

  $scope.init();
});