// Cascade View

var app = app || {};

(function($) {
    app.CascadeView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var cascade = _.template( $("#template_cascade").html(), {} );
            $(this.el).html(cascade);
        }

	});

})(jQuery);
