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

    it('should have a title within the alert', function() {
      expect(alertPage.alertDefinition.title).toBeDefined();
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
/*
    it('should render each of the contacts', function() {
      spyOn(contactsPage, 'createContactHTML');
      contactsPage.contactsCollection.reset([{}, {}, {}, {}]);
      contactsPage.render();
      expect(contactsPage.createContactHTML.calls.count()).toEqual(4);
    });

    it('returns the view object', function() {
      expect(contactsPage.render()).toEqual(contactsPage);
    });*/

  });

});
