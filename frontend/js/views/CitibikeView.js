// Citibike View

var app = app || {};

(function($) {
    app.CitibikeView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var citibike = _.template( $("#template_citibike").html(), {} );
            $(this.el).html(citibike);
        }

	});

})(jQuery);
