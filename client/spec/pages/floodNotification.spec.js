'use strict';

var floodNotification = require('../../src/js/views/floodNotification'),
  Router = require('../../src/js/framework/router.js'),
  App = require('../../src/js/app'),
  eventHub = require('../../src/js/framework/eventHub');

window.App = App;

describe('The Alert Notification', function() {
  it('should be defined', function() {
    expect(floodNotification.prototype).toBeDefined();
  });

  it('should have a class of floodNotification', function() {
    expect(floodNotification.prototype.className).toEqual('floodNotification');
  });

  it('should have appropriate methods', function() {
    expect(floodNotification.prototype.hide).toBeDefined();
  });

  it('should work', function() {
    floodNotification.prototype.showDetails();
  });

  it('should hide', function() {
    floodNotification.prototype.hide();
  });

  describe('button events', function() {
    it('should have button events', function() {
      expect(floodNotification.prototype.buttonEvents).toBeDefined();
    });

    it('should have right button to show details', function() {
      expect(floodNotification.prototype.buttonEvents.right).toEqual('showDetails');
    });
  });
});
