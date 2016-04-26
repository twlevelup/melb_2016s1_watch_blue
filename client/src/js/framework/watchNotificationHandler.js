'use strict';

// TODO rename notification centre

function NotificationHandler(notifications) {
  this.notifications = {};
  this.loadNotifications(notifications);
}

NotificationHandler.prototype._loadNotification = function(name, notification) {
  this.notifications[name] = notification;
};

NotificationHandler.prototype.loadNotifications = function(notifications) {
  _.each(notifications, function(view, name) {
    this._loadNotification(name, view);
  }, this);
};

NotificationHandler.prototype.showNotification = function(opts) {
  var Notification = this.notifications[opts.type];
  $.getJSON( "/images/feed.json", {}, function(data) {
    // Order by time
    var first = data.weather.sort(function(first, second) {
        if(first.unixtime == second.unixtime)
            return 0;
        if(first.unixtime < second.unixtime)
            return 1;
        if(first.unixtime > second.unixtime)
            return -1;
    })[0];

    this.activeNotification = new Notification(first);
    this.activeNotification.render();
  } );
};

NotificationHandler.prototype.hideNotification = function() {
  if (this.activeNotification) {
    this.activeNotification.remove();
    this.activeNotification = undefined;
  }
};

module.exports = NotificationHandler;
