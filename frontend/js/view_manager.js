// View Manager
// Imitating: http://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/
// TODO: Figure out how to destroy the view without removing the div the view targets

ViewManager = function() {

    return {

        viewList: [],

        closeView: function() {
            if (this.viewList.length) {
                _.each(this.viewList, function(view) {
                    // if (view.remove) view.remove();
                    // if (view.unbind) view.unbind();
                    // if (view.onClose) view.onClose();
                    // console.log("Attempted to destroy view");
                });
                this.viewList = [];
            }
        },

        setCurrentView: function(view) {
            var self = this;
            self.viewList.push(view);
        }

    };

}(jQuery);
