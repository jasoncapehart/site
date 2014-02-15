// Clot View

var app = app || {};

(function($) {
    app.ClotView = Backbone.View.extend({
        el: $('#content'),
	
        initialize: function() {
            _.bindAll(this, 'render'); // maintains context of "this"
            this.render(); // renders the view
        },

        render: function() {
            var clot = _.template( $("#template_clot").html(), {} );
            $(this.el).html(clot);

        // Load Data
        dataset = [[37.0, 40.2], [50.0, 46.5], [43.0, 39.5], [32.0, 46.4], [74.0, 62.3], [44.0, 42.2], [48.0, 49.7], [42.0, 38.9], [41.0, 45.1], [70.0, 68.3], [60.0, 47.8], [48.0, 43.9], [56.0, 39.6], [58.0, 45.1], [62.0, 50.3], [60.0, 57.8], [41.0, 39.8], [47.0, 46.6], [41.0, 31.9], [45.0, 43.1], [48.0, 39.8], [57.0, 37.4], [54.0, 40.2], [61.0, 53.0], [47.0, 40.0], [43.0, 37.9], [45.0, 42.9], [37.0, 42.0], [38.0, 41.6], [53.0, 44.3], [62.0, 45.7], [35.0, 44.3], [28.0, 19.5], [39.0, 38.8], [51.0, 36.6], [22.0, 28.8], [46.0, 42.8], [60.0, 42.1], [45.0, 43.3], [26.0, 38.4], [56.0, 46.7], [45.0, 46.8], [50.0, 41.0], [20.0, 25.5], [57.0, 54.8], [56.0, 52.7], [30.0, 44.5], [53.0, 53.4], [59.0, 49.1]]

        //Width and height
        var w = 500;
        var h = 500;
        var padding = 30;
        
        //Create scale functions
        var xScale = d3.scale.linear()
                             .domain([0, 100])
                             .range([padding, w - padding]);

        var yScale = d3.scale.linear()
                             .domain([0, 100])
                             .range([h - padding, padding]);

        //Define X axis
        var xAxis = d3.svg.axis()
                          .scale(xScale)
                          .orient("bottom")
                          .ticks(10);

        //Define Y axis
        var yAxis = d3.svg.axis()
                  .scale(yScale)
                  .orient("left")
                  .ticks(10);

        //Create SVG element
        var svg = d3.select("#clot_viz")
                    .append("svg")
                    .attr("width", w)
                    .attr("height", h);

        svg.selectAll("circle")
           .data(dataset)
           .enter()
           .append("circle")
           .transition()
           .each("start", function() { 
                d3.select(this)
                    .attr("r", 0)
            })
           .attr("cx", function(d) {
                return xScale(d[0]);
           })
           .attr("cy", function(d) {
                return yScale(d[1]);
           })
           // .attr("fill", "blue")
           .attr("opacity", 0.75)
           .each("end", function() { 
                d3.select(this)
                    .transition()
                    .duration(function(d) { 
                        return d[1]*50
                    })
                    .ease("bounce")
                    .attr("r", 7)
                    .attr("fill", "#41DB00")
            })

        svg.selectAll("circle")
           .on("mouseover", function() {
                d3.select(this)
                    .transition()
                    .duration(250)
                    .ease("linear")
                    .attr("r", 14)
                    .attr("fill", "#006C51");
            })
           .on("mouseout", function() {
                d3.select(this)
                    .transition()
                    .duration(250)
                    .ease("linear")
                    .attr("fill", "#41DB00")
                    .attr("r", 7);
            });

        // Add a line
        svg.append("line")
            .attr("x1", w-padding)
            .attr("y1", padding)
            .attr("x2", padding)
            .attr("y2", h-padding)
            .attr("stroke-width", 3)
            .attr("stroke", "#0E51A7")
            .attr("opacity", 0.5); 

        //Create X axis
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(0," + (h - padding) + ")")
            .call(xAxis);

        //Create Y axis
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(" + padding + ",0)")
            .call(yAxis);

       }

	});

})(jQuery);
