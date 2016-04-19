'use strict';

var homePage = require('../../src/js/pages/homePage'),
  Router = require('../../src/js/framework/router'),
  App = require('../../src/js/app');

window.App = App;

describe('The Home Page', function() {

  describe('rendering', function() {
    it('returns the view object', function() {
      expect(homePage.render()).toEqual(homePage);
    });

  });

});
