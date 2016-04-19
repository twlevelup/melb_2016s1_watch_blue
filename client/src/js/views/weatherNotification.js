'use strict';

var ViewWithButtons = require('../framework/viewWithButtons'),
  eventHub = require('../framework/eventHub');

var WeatherNotification = ViewWithButtons.extend({

  initialize: function(opts) {
/*    this.message = {
        "time": "09:20PM",
        "date": "22032016",
        "type": "Fire",
        "severity": "High",
        "location": "",
        "longtitude":"",
        "latitude":"",
        "description": "Please evacuate immediately"
    };*/
   this.message = opts;
  },

  className: 'weatherNotification',

  template: require('../../templates/views/weatherNotification.hbs'),

  buttonEvents: {
    right: 'showDetails',
    left: 'hide',
    top: 'hide',
    bottom: 'hide',
    face: 'hide'
  },

  render: function() {
    console.log(this.message.type);
    switch (this.message.type) {
      case "Hurricane":
        this.$el[0].className = 'hurricaneNotification';
        break;
      case "Fire":
        this.$el[0].className = 'fireNotification';
      default:
        break;
    }

    this.$el.html(this.template(this.message));

    // TODO make this configurable
    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  },

  hide: function() {
    eventHub.trigger('hideNotification');
  },

  showDetails: function() {
      window.App.navigate('alertDetails');
  }

});

module.exports = WeatherNotification;
