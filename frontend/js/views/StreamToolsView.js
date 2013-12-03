// Stream Tools View

var app = app || {};

(function($) {
    app.StreamToolsView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var stream = _.template( $("#template_stream_tools").html(), {} );
            $(this.el).html(stream);
        }

	});

})(jQuery);
