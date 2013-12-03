// Home Layout

var app = app || {};

(function($) {
    app.HomeView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var home = _.template( $("#template_home").html(), {} );
            $(this.el).html(home);
        }

	});

})(jQuery);
