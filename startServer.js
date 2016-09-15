(function () {
  'use strict';

  var express = require('express'),
    app = express(),
    apiRoutes = require('./api/routes'),
    bodyParser = require('body-parser'),
    morgan = require('morgan');

  app.use(morgan('dev'));
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(apiRoutes);
  app.set('view engine', 'jade');
  app.use(express.static(__dirname + '/app'));

  app.get('/*', function (req, res) {
    res.render(__dirname + '/app/index.jade');
  });

  app.listen(3005, function () {
    console.log('Started server at port 3005');
  });
}());