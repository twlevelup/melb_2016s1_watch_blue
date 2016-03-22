'use strict';

var PageView = require('../framework/page');

//var ContactsCollection = require('../collections/contacts'),
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

  // TODO use jquery to load a JSON file async test?
  seedContacts: function() {
    this.contactsCollection.reset([
      {name: 'Adam', phoneNumber: '0431 111 111'},
      {name: 'James', phoneNumber: '0431 222 222'},
      {name: 'Marzena', phoneNumber: '0431 333 333'}
    ]);
  },

  screenClickExample: function() {
    this.$el.html('<div>Oh noes!</div>');
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
/*
<h1 class="title">{{title}}</h1>
<h3 class="location">{{location}}</h3>
<h3 class="time">{{time}}</h3>
<h3 class="severity">{{severity}}</h3>
<p class="warning-description">{{warningDescription}}</p>
*/
    this.$el.html(this.template(this.alertDefinition));

    var contactsHTML = document.createDocumentFragment();

    //this.contactsCollection.each(function(contact) {
    //  $(contactsHTML).append(this.createContactHTML(contact));
    //}, this);

    this.$el.find('ul').html(contactsHTML);

    return this;
  },

  createContactHTML: function(contact) {
      var view = new ContactView({
        model: contact
      });
      return view.render().el;
    }

});

module.exports = new AlertsView();
