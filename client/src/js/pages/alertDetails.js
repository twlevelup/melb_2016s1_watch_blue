'use strict';

var PageView = require('../framework/page');
var AlertsView = require('../views/alertDetails');

var AlertsView = PageView.extend({

  id: 'alertDetails',

  alertDefinition: {
            "time": "",
            "date": "",
            "type": "",
            "severity": "",
            "location": "",
            "longtitude":"",
            "latitude":"",
            "description": ""
        },

  template: require('../../templates/pages/alertDetails.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    face: 'goToHomePage',
    left: 'goToHomePage'
  },

  updateData: function(data, thisHandle) {
    thisHandle
    thisHandle.render();

    thisHandle.alertDefinition = data;
  },

  initialize: function() {
    var thisHandle = this;
    $.getJSON( "/images/feed.json", {}, function(data) {
      thisHandle.updateData(data["weather"][0], thisHandle)

    } );

    this.render();
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
    console.log("initialize 2");
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
}

);

module.exports = new AlertsView();
