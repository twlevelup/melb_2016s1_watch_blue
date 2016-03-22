'use strict';

var AlertsView = Backbone.View.extend({

  tagName: 'li',

  template: require('../../templates/pages/alertDetails.hbs'),

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});

module.exports = AlertsView;
