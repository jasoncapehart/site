// Nav Layout

var app = app || {};

(function($) {
    app.NavView = Backbone.View.extend({
        el: $('#nav'),
	
	initialize: function() {
	    _.bindAll(this, 'render'); // maintains context of "this"
	    this.render(); // renders the view
	},

	render: function() {
        var nav = _.template( $("#template_nav").html(), {} );
	    $(this.el).html(nav);
	}

	});

})(jQuery);
