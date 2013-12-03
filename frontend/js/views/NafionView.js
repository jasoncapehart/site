// Nafion View

var app = app || {};

(function($) {
    app.NafionView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var nafion = _.template( $("#template_nafion").html(), {} );
            $(this.el).html(nafion);
        }

	});

})(jQuery);
