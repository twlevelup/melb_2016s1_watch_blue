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

  describe('notification colour', function() {

    it('should have blue for floods', function() {
      var testingNotification = new weatherNotification({
          "time": "12:00PM",
          "date": "22032016",
          "type": "Cyclone",
          "severity": "High",
          "location": "Townsville",
          "longtitude":"19.2564S",
          "latitude":"146.8183E",
          "description": "Please evacuate immediately"
      });

      testingNotification.render();
      expect(testingNotification.$el[0].className).toContain('cycloneNotification');
    });

    it('should have grey ish for storm', function() {
      var testingNotification = new weatherNotification(
        {
            "time": "12:00PM",
            "date": "22032016",
            "type": "Storm",
            "severity": "High",
            "location": "Townsville",
            "longtitude":"19.2564S",
            "latitude":"146.8183",
            "description": "Please evacuate immediately"
        }
      );

      testingNotification.render();
      expect(testingNotification.$el[0].className).toContain('stormNotification');
    });

    it('should have red for a fire', function() {
      var testingNotification = new weatherNotification({
          "time": "12:00PM",
          "date": "22032016",
          "type": "Fire",
          "severity": "High",
          "location": "Townsville",
          "longtitude":"19.2564S",
          "latitude":"146.8183E",
          "description": "Please evacuate immediately"
      });

      testingNotification.render();
      expect(testingNotification.$el[0].className).toContain('fireNotification');
    })

    it('should display the description', function() {
      var testingNotification = new weatherNotification({
          "time": "12:00PM",
          "date": "22032016",
          "type": "Fire",
          "severity": "High",
          "location": "Townsville",
          "longtitude":"19.2564S",
          "latitude":"146.8183E",
          "description": "Please evacuate immediately"
      });

      testingNotification.render();
      expect(testingNotification.$el[0].innerText).toContain('Fire');
    });
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
