// About Layout

var app = app || {};

(function($) {
    app.AboutView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var about = _.template( $("#template_about").html(), {} );
            $(this.el).html(about);
        }

	});

})(jQuery);
