var app = app || {};

$(function() {
    /* 1st Attempt
    new app.NavView();
    new app.GridView();
    new app.HomeView();
    */

    new app.NavView();
    var app_router = new AppRouter();

    // Start history for bookmarking
    Backbone.history.start();
});
