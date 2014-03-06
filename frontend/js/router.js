// Router
/*
TODO: There are 2 ugly hacks here that need to be fixed with the View Manager
    - The vegas background should be toggled with the view manager, not in the showView() route
    - The tab highlighting should be toggled with the view manager, not in the routes for each tab

*/

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
        // Close all views, except App view
        ViewManager.closeView();
        //TODO: This is an ugly hack. This needs to be part of the ViewManger
        $('.vegas-background').hide();
        // Add the current view
        ViewManager.setCurrentView(view);
        // Add view
        view;
    },

    home: function() {
        $('.vegas-background').show();
        $('#nav a:contains("Home")').parent().addClass("active");
        $('#nav a:contains("About")').parent().removeClass("active");
        $('#nav a:contains("Projects")').parent().removeClass("active");
        this.showNav();
        this.showView(new app.HomeView());
        /*
        $("div#content").empty();
        new app.HomeView();
        */
    },

    projects: function() {
        $('#nav a:contains("Home")').parent().removeClass("active");
        $('#nav a:contains("About")').parent().removeClass("active");
        $('#nav a:contains("Projects")').parent().addClass("active");
        this.showNav();
        this.showView(new app.GridView());
    },

    about: function() {
        $('#nav a:contains("Home")').parent().removeClass("active");
        $('#nav a:contains("About")').parent().addClass("active");
        $('#nav a:contains("Projects")').parent().removeClass("active");
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

