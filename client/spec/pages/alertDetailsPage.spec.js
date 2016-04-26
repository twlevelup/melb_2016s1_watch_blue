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

  describe('data handling', function () {
      it ('should update the data correctly', function() {
          var alertDefinition = {
                    "time": "abcd",
                    "date": "",
                    "type": "",
                    "severity": "",
                    "location": "",
                    "longtitude":"",
                    "latitude":"",
                    "description": ""
                };
          alertPage.updateData(alertDefinition, alertPage);
          expect(alertPage.alertDefinition).toEqual(alertDefinition);
      });
  });

  describe('alert sort comparitor', function () {
      it ('return -1/0/1 depending on order of two unix times', function () {
          var testData = [
          {
              "unixtime": 1461662670
          },
          {
              "unixtime": 1461667670
          },
          {
              "unixtime": 1461661670
          },
          {
              "unixtime": 1461661670
          }
          ]
          expect(alertPage.cmpAlertData(testData[0], testData[1])).toEqual(1);
          expect(alertPage.cmpAlertData(testData[1], testData[2])).toEqual(-1);
          expect(alertPage.cmpAlertData(testData[2], testData[3])).toEqual(0);
      });
  });

  describe('navigation', function () {
      describe('goToHomePage function', function () {
          it ('should go to the home page successfully', function() {
              spyOn(window.App, 'navigate');
              alertPage.goToHomePage();
              expect(window.App.navigate).toHaveBeenCalledWith('');
          });
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
