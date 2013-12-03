// Router


AppRouter = Backbone.Router.extend({

    routes: {
        "" : "home",
        "home" : "home",
        "projects" : "projects",
        "about" : "about",
        "projects/ricochet" : "ricochet",
        "projects/cascade" : "cascade",
        "projects/sgd" : "sgd",
        "projects/streamtools" : "streamtools",
        "projects/citibike" : "citibike"
    },

    showNav: function() {
        // Clean all views
        if (!$('#nav').length) {
            new app.NavView();
        }
    },

    showView: function(view) {
        console.log(view.el);
        // Close all views, except App view
        ViewManager.closeView();
        // Add the current view
        ViewManager.setCurrentView(view);
        // Add view
        view;
    },

    home: function() {
        this.showNav();
        this.showView(new app.HomeView());
        /*
        $("div#content").empty();
        new app.HomeView();
        */
    },

    projects: function() {
        this.showNav();
        this.showView(new app.GridView());
    },

    about: function() {
        this.showNav();
        this.showView(new app.AboutView());
    },

    ricochet: function() {
        this.showNav();
        this.showView(new app.RicochetView());
    },

    cascade: function() {
        this.showNav();
        this.showView(new app.CascadeView());
    },

    sgd: function() {
        this.showNav();
        this.showView(new app.SGDView());
    },

    streamtools: function() {
        this.showNav();
        this.showView(new app.StreamToolsView());
    },

    citibike: function() {
        this.showNav();
        this.showView(new app.CitibikeView());
    }






});

