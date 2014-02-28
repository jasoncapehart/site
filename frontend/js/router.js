// Router


AppRouter = Backbone.Router.extend({

    routes: {
        "" : "home",
        "home" : "home",
        "projects" : "projects",
        "about" : "about",
        "projects/clot" : "clot",
        "projects/ricochet" : "ricochet",
        "projects/cascade" : "cascade",
        "projects/sgd" : "sgd",
        "projects/streamtools" : "streamtools",
        "projects/citibike" : "citibike",
        "projects/cheers" : "cheers",
        "projects/nafion_ele": "nafion_ele",
        "projects/nafion": "nafion",
        "projects/notepaper": "notepaper"
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
        //TODO: This is an ugly hack. This needs to be part of the ViewManger
        $('.vegas-background').hide()
        $('.vegas-overlay').hide()
        // Add the current view
        ViewManager.setCurrentView(view);
        // Add view
        view;
    },

    home: function() {
        $('.vegas-background').show()
        $('.vegas-overlay').show()
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

    clot: function() {
        this.showNav();
        this.showView(new app.ClotView());
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
    },

    cheers: function() {
        this.showNav();
        this.showView(new app.CheersView());
    },

    nafion_ele: function() {
        this.showNav();
        this.showView(new app.NafionEleView());
    },

    nafion: function() {
        this.showNav();
        this.showView(new app.NafionView());
    },

    notepaper: function() {
        this.showNav();
        this.showView(new app.NotepaperView());
    }


});

