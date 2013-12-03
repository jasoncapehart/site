// Cheers View

var app = app || {};

(function($) {
    app.CheersView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var cheers = _.template( $("#template_cheers").html(), {} );
            $(this.el).html(cheers);
        }

	});

})(jQuery);
