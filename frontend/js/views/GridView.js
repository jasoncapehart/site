// Grid Layout

var app = app || {};

(function($) {
    app.GridView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var grid = _.template( $("#template_grid").html(), {} );
            $(this.el).html(grid);
        }

	});

})(jQuery);
