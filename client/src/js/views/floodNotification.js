'use strict';

var ViewWithButtons = require('../framework/viewWithButtons'),
  eventHub = require('../framework/eventHub');

var WatchNotification = ViewWithButtons.extend({

  initialize: function(opts) {
    this.message = opts && opts.message;
  },

  className: 'floodNotification',

  template: require('../../templates/views/flood.hbs'),

  buttonEvents: {
    right: 'hide',
    left: 'hide',
    top: 'hide',
    bottom: 'hide',
    face: 'hide'
  },

  render: function() {

    this.$el.html(this.template({message: this.message}));

    // TODO make this configurable
    $('#watch-face').append(this.$el);

    this.setButtonEvents();
    return this;
  },

  hide: function() {
    eventHub.trigger('hideNotification');
  }

});

module.exports = WatchNotification;
