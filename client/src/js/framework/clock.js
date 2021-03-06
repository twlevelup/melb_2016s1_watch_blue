'use strict';

var clock = {};

clock.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

clock.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

clock.displayDateTime = function(date) {

  date = date || new Date();

  var year = date.getFullYear(),
      month = date.getMonth(),
      d = date.getDate(),
      day = date.getDay();

  var h = date.getHours(),
      m = date.getMinutes(),
      s = date.getSeconds();

  var amPm = h > 12 ? 'PM' : 'AM';

  if (amPm == 'PM') h = h - 12;

  if (h < 10) {
    h = '0' + h;
  }

  if (m < 10) {
    m = '0' + m;
  }

  if (s < 10) {
    s = '0' + s;
  }

  var sDate = [clock.days[day].substring(0, 3) + ',', clock.months[month].substring(0, 3), d].join(' '),
    sTime =  [h, m].join(':'),
    sDateTime = sDate + ' ' + sTime;

  // TODO scope to current view
  $('.clock-date-time').html(sDateTime);
  $('.clock-date').html(sDate);
  $('.clock-time').html(sTime);
  $('.clock-ampm').html(amPm);

};

clock.start = function() {
  setInterval(clock.displayDateTime, 1000);
};

module.exports = clock;
