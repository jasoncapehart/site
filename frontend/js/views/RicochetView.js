// Ricochet View

var app = app || {};

(function($) {
    app.RicochetView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var ricochet = _.template( $("#template_ricochet").html(), {} );
            $(this.el).html(ricochet);
        }

	});

})(jQuery);
