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

  initialize: function() {
    var thisHandle = this;
    var feed_data = $.getJSON( "/images/feed.json", {}, function(data) {
      thisHandle.alertDefinition = data["weather"][0];
      thisHandle.render();

    } );
    console.log(feed_data.responseText);

    console.log("initialize");
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
