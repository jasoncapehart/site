// Notepaper View

var app = app || {};

(function($) {
    app.NotepaperView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var notepaper = _.template( $("#template_notepaper").html(), {} );
            $(this.el).html(notepaper);
        }

	});

})(jQuery);
