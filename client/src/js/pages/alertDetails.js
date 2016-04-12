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
    //this.contactsCollection = new ContactsCollection();
    //this.seedContacts();
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
<<<<<<< c652fcf4cadac6f532885e1ce4da54543dd7c9d7
||||||| merged common ancestors
/*
<h1 class="title">{{title}}</h1>
<h3 class="location">{{location}}</h3>
<h3 class="time">{{time}}</h3>
<h3 class="severity">{{severity}}</h3>
<p class="warning-description">{{warningDescription}}</p>
*/
=======
/*
<h1 class="title">{{title}}</h1>
<h3 class="location">{{location}}</h3>
<h3 class="time">{{time}}</h3>
<h3 class="severity">{{severity}}</h3>
<p class="warning-description">{{warningDescription}}</p>
*/
    console.log("initialize 2");
>>>>>>> Basic pulling data.json implemented
    this.$el.html(this.template(this.alertDefinition));

    var contactsHTML = document.createDocumentFragment();

    //this.contactsCollection.each(function(contact) {
    //  $(contactsHTML).append(this.createContactHTML(contact));
    //}, this);

    this.$el.find('ul').html(contactsHTML);

    return this;
<<<<<<< c652fcf4cadac6f532885e1ce4da54543dd7c9d7
  }
});
||||||| merged common ancestors
  },

  createContactHTML: function(contact) {
      var view = new ContactView({
        model: contact
      });
      return view.render().el;
    }

});
=======
  },

  createContactHTML: function(contact) {
      var view = new ContactView({
        model: contact
      });
      return view.render().el;
    },

  get_data: function(data) {

      this.render();
  }
}

);
>>>>>>> Basic pulling data.json implemented

module.exports = new AlertsView();
