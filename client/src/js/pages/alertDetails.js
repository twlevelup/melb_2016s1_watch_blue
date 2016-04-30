'use strict';

var PageView = require('../framework/page');
var AlertsView = require('../views/alertDetails');

var AlertsView = PageView.extend({

  id: 'alertDetails',

  alertDefinition: {
    time: '',
    date: '',
    type: '',
    severity: '',
    location: '',
    longtitude:'',
    latitude:'',
    description: ''
  },

  template: require('../../templates/pages/alertDetails.hbs'),

  buttonEvents: {
    right: 'goToHomePage',
    face: 'goToHomePage',
    left: 'goToHomePage',
    top: 'scrollUp',
    bottom: 'scrollDown',
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  updateData: function(data, thisHandle) {
    thisHandle.alertDefinition = data;
    thisHandle.render();
  },

  cmpAlertData: function(first, second) {
    console.log(first + ' ' + second);
    if (first.unixtime == second.unixtime)
        return 0;
    if (first.unixtime < second.unixtime)
        return 1;
    if (first.unixtime > second.unixtime)
        return -1;
  },

  initialize: function() {
    var thisHandle = this;
    $.getJSON('/images/feed.json', {}, function(data) {
      // Order by time
      var first = data.weather.sort(thisHandle.cmpAlertData)[0];

      thisHandle.updateData(first, thisHandle);

    });

    this.render();
  },

  goToHomePage: function() {
    window.App.navigate('');
  },

  render: function() {
    console.log('initialize 2');
    this.$el.html(this.template(this.alertDefinition));

    var contactsHTML = document.createDocumentFragment();

    this.$el.find('ul').html(contactsHTML);

    return this;
  }
}

);

module.exports = new AlertsView();
