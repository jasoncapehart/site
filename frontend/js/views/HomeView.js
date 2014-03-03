// Home Layout

var app = app || {};

(function($) {
    app.HomeView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var home = _.template( $("#template_home").html(), {} );
            $(this.el).html(home);

            $(function() {
                $.vegas({
                    src:'assets/img/FallRiver.jpg'
                });
                /* TODO: Figure out how to keep the overlay when the page is re-rendered
                $.vegas('overlay', {
                    src:'vegas/overlays/13.png'
                });
                */
            });
        }

	});

})(jQuery);
