'use strict';

var alertPage = require('../../src/js/pages/alertDetails'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Alert Details Page', function() {

  describe('warning data', function() {
    it('should have an alert defined', function() {
      expect(alertPage.alertDefinition).toBeDefined();
    });

    it('should have a type within the alert', function() {
      expect(alertPage.alertDefinition.type).toBeDefined();
    });

    it('should have a location within the alert', function() {
      expect(alertPage.alertDefinition.location).toBeDefined();
    });
  });

  describe('button events', function() {
    beforeEach(function() {
      alertPage.setButtonEvents();
    });

    describe('right', function() {
      it('should take the user to the home page', function() {
        spyOn(window.App, 'navigate');
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('');
      });
    });
  });

  describe('rendering', function() {

    it('should contain a header', function() {
      alertPage.render();
      expect(alertPage.$el).toBeDefined();
    });

  });

});
