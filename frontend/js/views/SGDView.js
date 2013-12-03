// SGD View

var app = app || {};

(function($) {
    app.SGDView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var sgd = _.template( $("#template_sgd").html(), {} );
            $(this.el).html(sgd);
        }

	});

})(jQuery);
