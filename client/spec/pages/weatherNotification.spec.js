'use strict';

var weatherNotification = require('../../src/js/views/weatherNotification'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Alert Notification', function() {
  it('should be defined', function() {
    expect(weatherNotification.prototype).toBeDefined();
  });

  it('should have a class of weatherNotification', function() {
    expect(weatherNotification.prototype.className).toEqual('weatherNotification');
  });

  it('should have appropriate methods', function() {
    expect(weatherNotification.prototype.hide).toBeDefined();
  });

  it('should work', function() {
    weatherNotification.prototype.showDetails();
  });

  it('should hide', function() {
    weatherNotification.prototype.hide();
  });

  describe('button events', function() {
    it('should have button events', function() {
      expect(weatherNotification.prototype.buttonEvents).toBeDefined();
    });

    it('should have right button to show details', function() {
      expect(weatherNotification.prototype.buttonEvents.right).toEqual('showDetails');
    });
  });
});
