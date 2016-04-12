'use strict';

var PageView = require('../framework/page');

var AlertsView = require('../views/alertDetails');

var AlertsView = PageView.extend({

  id: 'alertDetails',

  alertDefinition: {
    title: "Tropical Cyclone",
    location: "50km from your current location",
    time: "Tuesday 22 March at 8pm",
    severity: "High",
    warningDescription: "Tropical Cyclone Nancy is a Cat 4 cyclone. \
    It is currently heading to Brisbane, expected to touch down at \
    11pm tonight."
  },

  template: require('../../templates/pages/alertDetails.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    face: 'goToHomePage',
    left: 'goToHomePage'
  },

  initialize: function() {
    //this.contactsCollection = new ContactsCollection();
    //this.seedContacts();
    this.render();
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
    this.$el.html(this.template(this.alertDefinition));

    var contactsHTML = document.createDocumentFragment();

    //this.contactsCollection.each(function(contact) {
    //  $(contactsHTML).append(this.createContactHTML(contact));
    //}, this);

    this.$el.find('ul').html(contactsHTML);

    return this;
  }
});

module.exports = new AlertsView();
