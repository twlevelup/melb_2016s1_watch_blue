'use strict';

var ViewWithButtons = require('../framework/viewWithButtons'),
  eventHub = require('../framework/eventHub');

var WeatherNotification = ViewWithButtons.extend({

  initialize: function(opts) {
    if (opts.severity) {
      console.log("External Source " + opts);
      this.message = opts;
    }
    else {
      this.message = {
        time: '09:20PM',
        date: '22032016',
        type: 'Cyclone',
        severity: 'High',
        location: '',
        longtitude:'',
        latitude:'',
        description: 'Please evacuate immediately'
      };
    }

   
   var currentTime = new Date().getTime();
   var difference = this.updateTime(currentTime,this.message['unixtime']);

  this.message['time'] = this.prettyTime(difference); 
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
    switch (this.message.type) {
      case 'Flood':
        this.$el[0].className = 'floodNotification';
        break;
      case 'Fire':
        this.$el[0].className = 'fireNotification';
        break;
      case 'Storm':
        this.$el[0].className = 'stormNotification';
        break;
      case 'Cyclone':
        this.$el[0].className = 'cycloneNotification';
        break;
      default:
        break;
    }

    this.$el.html(this.template(this.message));

    // TODO make this configurable
    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  },
  updateTime: function(currentTime, notificationTime){
      console.log("Current Time " + currentTime/1000);
      console.log("Notification Time " + notificationTime);
      var difference = Math.floor(currentTime/1000) - notificationTime;
      console.log("Time difference"+difference);
      return difference;
  },

  prettyTime: function(timeSince){
      if(timeSince > (3600 * 24)){
        return "over a day ago";
      } else if(timeSince > 3600){
        var hours = Math.floor(timeSince / 3600);
        return hours + " hrs ago";
      } else if( timeSince > 60 && timeSince < 3600){
        var minutes =  Math.floor(timeSince / 60);
        return minutes + " mins ago";
      }
      return "invalid time";
      
  }
  ,

  hide: function() {
    eventHub.trigger('hideNotification');
  },

  showDetails: function() {
    window.App.navigate('alertDetails');
  }

});

module.exports = WeatherNotification;
