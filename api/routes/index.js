(function () {
  'use strict';

  var express = require('express'),
    cntrl = require('../controller'),
    routes = express.Router();

  routes.post('/movies', cntrl.addMovies);
  routes.get('/movies', cntrl.searchMovies);
  routes.get('/search', cntrl.searchMovies);
  routes.delete('/movies/:id', cntrl.removeMovies);
  routes.put('/movies/:id', cntrl.updateMovies);

  module.exports = routes;
}());