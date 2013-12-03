// Nafion Electrolytic View

var app = app || {};

(function($) {
    app.NafionEleView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var nafion_ele = _.template( $("#template_nafion_ele").html(), {} );
            $(this.el).html(nafion_ele);
        }

	});

})(jQuery);
