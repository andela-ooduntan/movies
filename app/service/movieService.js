'use strict';

app.factory('Movies', function ($http, $resource) {
  return $resource('/movies/:id', {id: '@id'}, {
    update: {
      method: 'PUT'
    }
  });
})